const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    disableStaticImages: true
  },
  output: 'export', // Add this line for static export
  basePath: isProd ? '/test' : '',
  assetPrefix: isProd ? '/test/' : '',
};

module.exports = withTM(withFonts(withImages(nextConfig)));