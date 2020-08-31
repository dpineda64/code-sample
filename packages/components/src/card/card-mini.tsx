import React from 'react';
import {
  CardMiniStyles,
  CardTitle,
  CardContent,
  CardMiniActions,
} from './card.styles';
import { CardMiniProps } from './card.types';

const CardMini: React.FC<CardMiniProps> = ({
  title,
  description,
  actions,
  active,
}: CardMiniProps) => (
  <CardMiniStyles active={active}>
    <div className="w-10/12">
      <CardTitle fontWeight="normal"> {title} </CardTitle>
      <CardContent>{description}</CardContent>
    </div>
    {actions && (
      <CardMiniActions>
        {actions.map(action => (
          <React.Fragment key={action.key}>{action}</React.Fragment>
        ))}
      </CardMiniActions>
    )}
  </CardMiniStyles>
);

export { CardMini };
