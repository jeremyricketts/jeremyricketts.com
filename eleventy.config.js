module.exports = function(eleventyConfig) {
  // Passthrough copy for images
  eleventyConfig.addPassthroughCopy('src/img');

  // Passthrough copy for the old portfolio site
  eleventyConfig.addPassthroughCopy({'pco': 'pco'});

  // Passthrough copy for CNAME
  eleventyConfig.addPassthroughCopy('CNAME');

  // Watch CSS for changes (will be processed by Tailwind)
  eleventyConfig.addWatchTarget('src/css/');

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
