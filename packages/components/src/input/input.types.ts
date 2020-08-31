import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  icon?: string;
  onIconClick?: (e: React.MouseEvent) => void;
  label?: string;
}

export interface InputTypes {
  Container?: React.FC<ComponentProps<'div'>>;
  Label?: React.FC<ComponentProps<'label'>>;
  Password?: React.FC<ComponentProps<'input'>>;
}
