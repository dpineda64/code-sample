import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { BaseVariants, BaseSizes } from '@vg-kit/utils';
import { applyVariant } from '../utils/style-fn';
import { IconName } from '../icon';

export type ButtonSizes = BaseSizes;

/**
 * @description takes a prop and returns a tw macro class
 * @param size small, medium, large
 */
const applyButtonSize = (size: ButtonSizes): any => {
  switch (size) {
    case 'small':
      return {
        ...tw`px-6 text-sm`,
        minWidth: 100,
      };
  }
};

export interface ButtonProps extends ComponentProps<'button'> {
  label?: string;
  icon?: IconName;
  variant: BaseVariants;
  size: ButtonSizes;
  loading?: boolean;
}

export const ButtonStyles = styled('button')<ButtonProps>(
  {
    ...tw`py-2 px-10 text-white rounded capitalize outline-none`,
    ...tw`transition-all duration-500 ease-in-out text-base`,
    minWidth: 140,
    maxHeight: 42,
    '&:focus': {
      ...tw`outline-none`,
    },
    span: {
      ...tw`align-middle mx-2 md:inline-block`,
    },
    svg: {
      ...tw`inline-block align-middle`,
    },
    '&[data-icon="true"]': {
      ...tw`px-4`,
    },
  },
  ({ variant, size }: ButtonProps) => ({
    ...applyVariant(variant),
    ...applyButtonSize(size),
  })
);
