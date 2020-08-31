import React from 'react';

import {
  Icon,
  Card,
  CardFooterItem,
  CardProps,
  CardLargeProps,
  CardMiniProps,
} from '../src';
import { defaultValues } from '../src/utils/storybook';

export default {
  title: 'Card',
  component: Card,
  args: {
    background:
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1969&q=80',
    title: 'Card Title',
    href: '#',
    footer: [
      <CardFooterItem label="Type" />,
      <CardFooterItem label="Review" />,
      <CardFooterItem label="Price" />,
    ],
  },
};

const Template: React.FC<CardProps> = (args: CardProps) => (
  <a href="#">
    <Card {...args} />
  </a>
);

export const Normal = Template.bind({});

Normal.args = {
  as: 'a',
};

const CardLargeTemplate: React.FC<CardLargeProps> = (args: CardLargeProps) => (
  <a href="#">
    <Card.Large {...args} />
  </a>
);

export const Large = CardLargeTemplate.bind({});

Large.args = {
  title: 'Card Large Title',
  country: {
    name: 'Country',
  },
  user: defaultValues.user,
};

const CardMiniTemplate: React.FC<CardMiniProps> = (args: CardMiniProps) => (
  <a href="#">
    <Card.Mini {...args} />
  </a>
);

export const Mini = CardMiniTemplate.bind({});

Mini.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  active: false,
};

export const MiniWithActions = CardMiniTemplate.bind({});

MiniWithActions.args = {
  ...Mini.args,
  actions: [
    <Icon
      name="close"
      key="delete"
      width={16}
      height={16}
      viewBox="0 0 16 21"
    />,
    <Icon name="drag" key="drag" />,
  ],
};
