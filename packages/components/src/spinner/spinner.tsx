import styled from '@emotion/styled';
import { tuple } from '@vg-kit/utils';

const sizes: { [key: string]: number } = {
  small: 15,
  normal: 30,
};

const sSize = tuple('small', 'large');
type SpinnerSize = typeof sSize[number];

export interface SpinnerProps {
  size: SpinnerSize;
}

const Spinner = styled('div')<SpinnerProps>(
  {
    display: 'inline-block',
    border: '4px solid hsl(206, 72%, 95%)',
    borderLeftColor: 'hsl(206, 72%, 62%)',
    borderRadius: '50%',
    animation: 'spin 1.2s linear infinite',
  },
  ({ size }: SpinnerProps) => ({
    width: sizes[size],
    height: sizes[size],
  })
);

Spinner.defaultProps = {
  size: 'small',
};

Spinner.displayName = 'vg_spinner';

export { Spinner };
