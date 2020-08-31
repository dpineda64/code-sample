const isProd = process.env.NODE_ENV === 'production';

const config = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};

// if (isProd) {
//   config.plugins.push(
//     purgeCSS({
//       content: ['./src/**/*.tsx'],
//       css: ['./src/**/*.css'],
//     }),
//   );
// }

module.exports = () => config;
