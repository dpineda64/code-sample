import React, { ReactElement } from 'react';
import { CardFooterItemProps } from './card.types';
import { CardFooterItemStyles } from './card.styles';
import { Icon } from '../icon';

export const CardFooterItem = (props: CardFooterItemProps): ReactElement => (
  <CardFooterItemStyles>
    {props.icon && <Icon name={props.icon} />}
    <span> {props.label} </span>
  </CardFooterItemStyles>
);
