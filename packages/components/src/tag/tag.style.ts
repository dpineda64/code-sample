import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ComponentProps } from 'react';
import { IconName } from '../icon';

export interface TagProps extends ComponentProps<'div'> {
  label?: string;
  icon?: IconName;
}

export const TagStyles = styled('div')<TagProps>({
  ...tw`bg-accents-blue-10 inline-block px-3 py-1 rounded text-sm text-primary fill-primary`,
  lineHeight: 1.5,
  span: {
    ...tw`mr-1`,
  },
  '> *': {
    ...tw`inline-block align-middle`,
  },
  '&:hover': {
    cursor: 'pointer',
  },
});
