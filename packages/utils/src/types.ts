export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const tuple = <T extends string[]>(...args: T) => args;

const variants = tuple('primary', 'secondary', 'clean');
export type BaseVariants = typeof variants[number];

const sizes = tuple('small', 'large', 'normal');
export type BaseSizes = typeof sizes[number];
