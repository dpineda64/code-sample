import styled from '@emotion/styled';
import tw from 'twin.macro';

export const HeroStyles: React.FC<{}> = styled('div')({
  height: 490,
  ...tw`h-auto w-full bg-black`,
});

export const Container = styled('div')(tw`w-4/5 m-auto`);
