import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface AvatarProps extends React.ComponentProps<'img'> {
  size?: 'small' | 'large';
}
const Avatar = styled('img')<AvatarProps>(
  {
    ...tw`w-12 h-12 mx-auto md:mx-0 md:mr-6 rounded-full`,
  },
  ({ size }: AvatarProps) => size === 'small' && tw`w-8 h-8`
);

export { Avatar };
