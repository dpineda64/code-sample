import React from 'react';

import { Tag, TagProps } from '../src';

export default {
  title: 'Tag',
  component: Tag,
  args: {
    label: 'Tag',
  },
};

const TagTemplate: React.FC<TagProps> = (args: TagProps) => <Tag {...args} />;

export const Simple = TagTemplate.bind({});

export const withIcon = TagTemplate.bind({});

withIcon.args = {
  icon: 'close-circle',
};
