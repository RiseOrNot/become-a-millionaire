import s from './burgerButton.module.css';

import React, { useState } from 'react';

export type BurgerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
  const [active, setActive] = useState(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setActive((prevState) => !prevState);
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      {...props}
      className={`${s.burger} ${active ? s.active : ''} ${props.className || ''}`}
      onClick={handleClick}
      id={'burger'}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerButton;
