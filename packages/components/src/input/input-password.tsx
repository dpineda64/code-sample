import React, { useState, ComponentProps } from 'react';
import { Icon } from '../icon';
import { InputContainer, InputStyles, InputLabel } from './input.styles';
import { InputProps } from './input.types';

const InputPassword: React.FC<ComponentProps<'input'>> = ({
  label,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputLabel htmlFor={props.name}> {label} </InputLabel>
      <InputContainer>
        <InputStyles {...props} type={showPassword ? 'text' : 'password'} />
        <Icon
          name="eye"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          onClick={(): void => setShowPassword(!showPassword)}
          className={`cursor-pointer ${
            showPassword ? 'fill-primary' : 'fill-txt-alternative'
          }`}
        />
      </InputContainer>
    </>
  );
};

export { InputPassword };
