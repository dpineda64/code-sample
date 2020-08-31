import React from 'react';
import { Avatar } from '../avatar';
// import { Icon } from '../icon';

import {
  CardLargeStyles,
  CardContent,
  CardImage,
  CardTitle,
} from './card.styles';
import { CardLargeProps } from './card.types';

const CardLarge: React.FC<CardLargeProps> = ({ title, footer, ...props }) => (
  <CardLargeStyles title={title}>
    <div className="flex p-4">
      <Avatar src={props.user.avatar} size="small" />
    </div>
    <CardImage>
      <img src={props.background} alt={title} />
    </CardImage>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <div>
        <span>{props.country.name}</span>
      </div>
    </CardContent>
    <div className="flex px-4">
      {footer.map(FooterItem => (
        <React.Fragment key={FooterItem.props.label}>
          {FooterItem}
        </React.Fragment>
      ))}
    </div>
  </CardLargeStyles>
);

export { CardLarge };
