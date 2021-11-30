import React, { FC } from 'react';

export interface IButton {
  color: string;
}

export const Button: FC<IButton> = ({ children, color, ...props }) => {
  return (
    <button {...props} style={{ color }}>
      {children}
    </button>
  );
};
