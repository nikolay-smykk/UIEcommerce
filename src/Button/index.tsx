import { FC } from 'react';

export interface IButton {
  color: string;
  big: boolean;
}

export const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
