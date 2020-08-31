import React, { ComponentProps } from 'react';
import { H1, H2, H3, H4, H5, Paragraph } from './typography.styles';

export interface TypographyTypes {
  H1: React.FC<ComponentProps<'h1'>>;
  H2: React.FC<ComponentProps<'h2'>>;
  H3: React.FC<ComponentProps<'h3'>>;
  H4: React.FC<ComponentProps<'h4'>>;
  H5: React.FC<ComponentProps<'h4'>>;
  Paragraph: React.FC<ComponentProps<'p'>>;
}

const Typography: TypographyTypes = {
  H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
};

export { Typography };
