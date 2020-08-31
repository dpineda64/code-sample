import React, { ComponentProps } from 'react';

import { Input, InputProps } from '../src';

export default {
  title: 'Input',
  component: Input,
};

const InputTemplate: React.FC<InputProps> = (args: InputProps) => (
  <Input {...args} />
);

export const Text = InputTemplate.bind({});

Text.args = {
  label: 'Name',
  name: 'name',
};

const PasswordTemplate: React.FC<ComponentProps<'input'>> = (
  args: ComponentProps<'input'>
) => <Input.Password {...args} />;

export const Password = PasswordTemplate.bind({});

Password.args = {
  label: 'Password',
  name: 'password',
};

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
