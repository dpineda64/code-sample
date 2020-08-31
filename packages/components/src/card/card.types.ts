import { tuple } from '@vg-kit/utils';
import { ComponentProps, ReactElement } from 'react';
import { IconName } from '../icon';

const cardVariants = tuple('normal', 'editor', 'large');
export type CardVariants = typeof cardVariants[number];

export interface BaseCardProps extends ComponentProps<'div'> {
  title: string;
  as: any;
  background?: string;
  href?: string;
  footer: ReactElement[];
}

export type CardProps = BaseCardProps;

export type CardLargeProps = BaseCardProps & {
  user: {
    avatar: string;
  };
  country: {
    name: string;
  };
};

export type CardMiniProps = Partial<BaseCardProps> & {
  active?: boolean;
  description?: string;
  actions?: React.ReactElement[];
};

export interface CardTypes {
  Large?: React.FC<CardLargeProps>;
  Mini?: React.FC<CardMiniProps>;
}

export interface CardFooterItemProps {
  icon?: IconName;
  label: string;
}
