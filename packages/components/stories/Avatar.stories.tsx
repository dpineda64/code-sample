import React from 'react';

import { Avatar, AvatarProps } from '../src/avatar';
import { defaultValues } from '../src/utils/storybook';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    src: defaultValues.user.avatar,
  },
};

const AvatarTemplate: React.FC<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Base = AvatarTemplate.bind({});

Base.args = {};

export const Small = AvatarTemplate.bind({});

Small.args = {
  size: 'small',
};
