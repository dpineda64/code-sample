export function buildTailwindConfig(theme: any): any {
  return {
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
}
