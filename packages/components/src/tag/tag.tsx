import React from 'react';
import { TagStyles, TagProps } from './tag.style';
import { Icon } from '../icon';

const Tag: React.FC<TagProps> = ({ label, icon, ...props }: TagProps) => (
  <TagStyles {...props}>
    <span> {label} </span>
    {icon && <Icon name={icon} width={16} height={16} viewBox="0 0 24 24" />}
  </TagStyles>
);

export { Tag };
