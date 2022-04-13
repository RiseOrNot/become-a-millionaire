import React from 'react';

import s from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, fullWidth, type = 'button', ...rest }) => {
  return (
    <button type={type} {...rest} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
