/* eslint-disable */
import { colors, screens, fill, height, width } from 'tailwindcss/defaultTheme';

import { grays, text, states, base, palette, accents } from './colors';

const theme = {
  colors: {
    ...colors,
    ...palette,
    base,
    states,
    accents,
    gray: {
      ...colors.gray,
      ...grays,
      25: 'rgba(123, 137, 151, 0.25)',
      10: 'rgba(123, 137, 151, 0.10)',
      75: 'rgba(123, 137, 151, 0.75)',
    },
    whites: {
      50: 'rgba(255, 255, 255, 0.5)',
    },
    yellow: {
      ...colors.yellow,
      901: '#F5CB5C',
    },
    txt: {
      ...text,
    },
  },
  screens: {
    ...screens,
    xxl: '1920px',
  },
  height: (theme: any) => ({
    ...height(theme),
    page: 'calc(100vh - 75px)',
    hero: '490px',
  }),
  width: (theme: any) => ({
    ...width(theme),
    sidebar: '12.666667%',
  }),
  fill: (theme: any) => ({
    ...fill,
    ...theme('colors'),
  }),
  variants: {
    fill: ['responsive', 'hover', 'focus'],
  },
};

export { theme };
