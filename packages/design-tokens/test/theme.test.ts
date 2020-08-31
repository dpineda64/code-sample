import { theme } from '../src';

describe('theme', () => {
  it('has default theme colors', () => {
    expect(theme).toHaveProperty('colors.base.dark');
  });
});
