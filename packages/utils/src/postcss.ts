const postCssConfig = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};

export { postCssConfig };
