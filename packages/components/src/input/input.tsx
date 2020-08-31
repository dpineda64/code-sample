import React from 'react';
import { InputLabel, InputStyles, InputContainer } from './input.styles';
import { Icon } from '../icon';
import { InputProps, InputTypes } from './input.types';

const Input: React.FC<InputProps> & InputTypes = ({
  icon,
  label,
  onIconClick,
  ...props
}: InputProps) => (
  <>
    {label && <InputLabel htmlFor={props.name}> {label} </InputLabel>}
    <InputContainer disabled={props.disabled}>
      <InputStyles {...props} />
      {icon && (
        <Icon
          name="arrow-down"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          {...(onIconClick ? { onClick: onIconClick } : {})}
        />
      )}
    </InputContainer>
  </>
);

Input.defaultProps = {
  type: 'text',
};

export { Input };
