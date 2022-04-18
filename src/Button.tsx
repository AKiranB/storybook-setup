import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  //Select which variant to use
  variant: 'primary' | 'secondary';
}
// test
export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{ backgroundColor: variant === 'primary' ? 'blue' : 'red' }}
    >
      {children}
    </button>
  );
};
