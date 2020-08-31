import React from 'react';
import { ButtonStyles, ButtonProps } from './button.styles';
import { Icon } from '../icon';
import { Spinner } from '../spinner';

const Button = ({
  icon,
  loading,
  label,
  ...props
}: ButtonProps): React.ReactElement<'button'> => (
  <ButtonStyles
    {...(icon !== null ? { 'data-icon': 'true' } : {})}
    aria-label={loading ? 'loading' : label}
    {...props}
  >
    {loading ? (
      <Spinner size="small" />
    ) : (
      <>
        {icon && <Icon name={icon} />}
        <span>{label}</span>
      </>
    )}
  </ButtonStyles>
);

Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
};

export { Button };
