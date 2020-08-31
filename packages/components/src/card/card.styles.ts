import styled from '@emotion/styled';
import tw from 'twin.macro';
import { CardMiniProps } from './card.types';

/**
 * Card Elements
 */

export const CardImage = styled('figure')({
  ...tw`relative transition-all duration-500 ease-in-out`,
  height: 300,
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',

  img: {
    ...tw`absolute w-full h-full rounded-lg`,
  },
});

export const CardContent = styled('div')({
  ...tw`p-4 flex`,
  div: {
    ...tw`w-6/12 items-center flex justify-end`,
    span: {
      ...tw`uppercase`,
    },
  },
});

export const CardTitle = styled('h1')<{
  thumbnail?: boolean;
  fontWeight?: any;
}>(
  {
    ...tw`text-xl  w-6/12`,
  },
  ({ fontWeight }) => ({
    fontWeight: fontWeight ? fontWeight : '600',
  }),
  ({ thumbnail }) =>
    !thumbnail && {
      ...tw`text-black`,
    }
);

export const CardFooterItemStyles = styled('div')({
  ...tw`mr-2 pr-4 text-whites-50 tracking-wide relative overflow-hidden`,
});

/**
 * Card Types Styles
 */

export const BaseCardStyles = styled('figure')({
  ...tw`bg-black py-4 text-white flex flex-col justify-end rounded-lg relative`,
  minWidth: 370,
  maxWidth: 380,
  height: 226,
  boxShadow: '20px 20px 60px #c1c4c9, -20px -20px 60px #ffffff',
  '.overlay': {
    ...tw`absolute transition-opacity duration-500 ease-in-out top-0 bottom-0 h-full w-full opacity-0 z-0`,
    backgroundImage:
      'linear-gradient(180deg,rgba(0, 0, 0, 0.23) 0%,rgba(0, 0, 0, 0) 50%), linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 50%)',
  },
  img: {
    ...tw`absolute top-0 bottom-0 h-full w-full z-0`,
  },
  '&:hover .overlay': {
    ...tw`opacity-100`,
  },
});

/**
 * Card Large
 */

export const CardLargeStyles = styled('div')({
  ...tw`bg-transparent`,
  width: 320,
  '&:hover': {
    figure: {
      boxShadow: '20px 20px 60px #c1c4c9, -20px -20px 60px #ffffff',
    },
  },
  [CardFooterItemStyles as any]: {
    ...tw`text-txt-base`,
  },
});

/**
 * Card Mini
 */
export const CardMiniStyles = styled('div')(
  {
    ...tw`bg-white text-txt-base p-4 rounded-lg flex`,
    ...tw`transition-shadow duration-500 ease-in-out`,
    maxWidth: 380,
    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.07)',

    [CardContent as any]: {
      ...tw`px-0 py-2`,
    },

    '&:hover': {
      boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.2)',
    },
  },
  ({ active }: CardMiniProps) =>
    active && {
      ...tw`bg-primary`,
      [CardTitle as any]: {
        ...tw`text-white`,
      },
      color: '#DDDDDD',
      svg: {
        fill: '#DDDDDD',
      },
    }
);

export const CardMiniActions = styled('div')({
  ...tw`flex flex-col w-2/12 items-end`,
  svg: {
    ...tw`my-2`,
  },
});
