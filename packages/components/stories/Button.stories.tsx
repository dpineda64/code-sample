import React from 'react';

import { Button } from '../src';
import { ButtonProps } from '../src/button/button.styles';

export default {
  title: 'Button',
  component: Button,
};

const Template: React.FC<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  label: 'small',
};

export const Clean = Template.bind({});
Clean.args = {
  label: 'clean',
  variant: 'clean',
};

export const withIcon = Template.bind({});
withIcon.args = {
  label: 'Add to Path',
  icon: 'add',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: 'loading',
};
