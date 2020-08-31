import React from 'react';

import { Hero } from '../src';

export default {
  title: 'Hero',
  component: Hero,
};

const HeroTemplate: React.FC<{}> = (args: {}) => <Hero {...args} />;

export const Simple = HeroTemplate.bind({});
