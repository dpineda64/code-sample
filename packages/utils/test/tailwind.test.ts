import { buildTailwindConfig } from '../src';

describe('tailwind-config', () => {
  it('theme build correctly', () => {
    const theme = buildTailwindConfig({ whites: { 50: '#000' } });

    expect(theme).toHaveProperty('theme.whites.50');
  });
});
