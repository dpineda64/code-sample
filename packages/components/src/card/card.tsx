import React from 'react';
import { CardProps, CardTypes } from './card.types';
import { BaseCardStyles, CardTitle } from './card.styles';

const Card: React.FC<CardProps> & CardTypes = ({
  title,
  background,
  footer,
}: CardProps) => (
  <BaseCardStyles title={title}>
    <img src={background} alt={title} itemProp="thumbnailUrl" />
    <div className="overlay" />
    <div className="px-8 z-10">
      <CardTitle thumbnail={true}> {title} </CardTitle>
      <div className="flex">
        {footer.map(FooterItem => (
          <React.Fragment key={FooterItem.props.label}>
            {FooterItem}
          </React.Fragment>
        ))}
      </div>
    </div>
  </BaseCardStyles>
);

Card.defaultProps = {
  footer: [],
};

export { Card };
