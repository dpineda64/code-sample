const { theme } = require('@vg-kit/design-tokens');

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  theme: {
    ...theme,
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [],
};
