import React, { ComponentProps } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { InputProps } from './input.types';

export const InputLabel: React.FC<ComponentProps<'label'>> = styled('label')({
  ...tw`font-semibold`,
  letterSpacing: 0.4,
});

export interface InputContainerProps extends ComponentProps<'div'> {
  disabled?: boolean;
}

export const InputContainer: React.FC<InputContainerProps> = styled('div')(
  {
    ...tw`bg-white text-input-text  rounded  px-4`,
    width: 'max-content',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    '&:focus-within': {
      ...tw`bg-input-bg`,
    },
    svg: {
      ...tw`inline-block`,
    },
  },
  ({ disabled }: InputContainerProps) => disabled && tw`bg-gray-25 shadow-none`
);

export const InputStyles: React.FC<InputProps> = styled('input')({
  ...tw`rounded py-2 bg-transparent`,
  '&:focus': {
    ...tw`outline-none text-txt-base`,
  },
});
