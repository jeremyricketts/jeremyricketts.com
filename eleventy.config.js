module.exports = function(eleventyConfig) {
  // Disable git ignore to ensure all files are watched
  eleventyConfig.setWatchJavaScriptDependencies(false);

  // Passthrough copy for images
  eleventyConfig.addPassthroughCopy('src/img');

  // Passthrough copy for the old portfolio site
  eleventyConfig.addPassthroughCopy({'pco': 'pco'});

  // Passthrough copy for CNAME
  eleventyConfig.addPassthroughCopy('CNAME');

  // Watch CSS for changes (will be processed by Tailwind)
  eleventyConfig.addWatchTarget('src/css/');

  // Watch template files to trigger CSS rebuild when classes change
  eleventyConfig.addWatchTarget('src/**/*.njk');

  // Force rebuild on template changes
  eleventyConfig.on('eleventy.before', async () => {
    // Clear require cache to force CSS recompilation
    delete require.cache[require.resolve('./src/css/style.css')];
  });

  // Add CSS processing with PostCSS
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async function(inputContent, inputPath) {
      if (inputPath !== './src/css/style.css') {
        return;
      }

      const postcss = require('postcss');
      const postcssPlugin = require('@tailwindcss/postcss');

      const result = await postcss([
        postcssPlugin
      ]).process(inputContent, {
        from: inputPath
      });

      return async () => {
        return result.css;
      };
    }
  });

  // Configure server to disable caching
  eleventyConfig.setServerOptions({
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate"
    }
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
