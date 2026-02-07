#!/bin/bash

# Script to download all images from the live Framer site
# This preserves the original content while migrating to 11ty

cd src/img || exit 1

echo "Downloading core site images..."

# Core images
curl -sS -o "hero-home.jpg" "https://framerusercontent.com/images/x2IgPeBHdCGJ3GZlcm6sIjIaw.jpg?scale-down-to=2048"
curl -sS -o "logo.svg" "https://framerusercontent.com/images/X6X9vKNDjLtup3yYH85r26O4Co4.svg"
curl -sS -o "profile.jpg" "https://framerusercontent.com/images/Al0AgOZcNLqxJxiph91azjU6v2U.jpg?scale-down-to=1024"
curl -sS -o "hero-lessons.jpg" "https://framerusercontent.com/images/BMEZrEcZmhqgqadb2F83aOVcYuY.jpg?scale-down-to=2048"
curl -sS -o "red-cross-badge.jpg" "https://framerusercontent.com/images/RdcE45poFjMvMXP3hvKVoOcqg.jpg"

echo "Downloading testimonial images..."
cd testimonials || exit 1
curl -sS -o "kaarin-scott.jpg" "https://framerusercontent.com/images/Z9X9DJFMFMocJKm86bMwXFvhmU.jpeg?scale-down-to=512"
curl -sS -o "melanie-brad.jpg" "https://framerusercontent.com/images/yogqACkGu7uZeOrQH5DGC2KxPA.jpeg?scale-down-to=512"
curl -sS -o "kelsey.jpg" "https://framerusercontent.com/images/zLz4jyYsb0aJBumUJfNKl1Lvo.jpg?scale-down-to=512"
curl -sS -o "nicole.jpg" "https://framerusercontent.com/images/rBALomtdNYlRtmjkpXdmaQeCW0I.jpg"
cd ..

echo "Downloading lesson thumbnail images..."
cd lessons || exit 1
curl -sS -o "lesson-1.jpg" "https://framerusercontent.com/images/R4p5IbO5Ykz4VSwlY9bFqm6C9jw.jpg"
curl -sS -o "lesson-2.jpg" "https://framerusercontent.com/images/cP7MjDHIcCDjuVRJr8rIjWRhM.jpg"
curl -sS -o "lesson-3.jpg" "https://framerusercontent.com/images/bZUNYqfcRlx5i9s0nfcBL4kD4.jpg"
curl -sS -o "lesson-4.jpg" "https://framerusercontent.com/images/placeholder.jpg"
curl -sS -o "lesson-5.jpg" "https://framerusercontent.com/images/placeholder.jpg"
curl -sS -o "lesson-6.jpg" "https://framerusercontent.com/images/placeholder.jpg"
curl -sS -o "lesson-7.jpg" "https://framerusercontent.com/images/placeholder.jpg"
curl -sS -o "lesson-8.jpg" "https://framerusercontent.com/images/placeholder.jpg"
cd ..

echo "Image download complete! Downloaded core site images and testimonial photos."
echo "Note: Lesson detail images and equipment images will be downloaded after visiting those pages."
