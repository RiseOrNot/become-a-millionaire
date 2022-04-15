import React from 'react';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement | HTMLButtonElement>;

const Wrapper: React.FC<WrapperProps> = ({ children, onClick, ...rest }) => {
  return onClick ? (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div {...rest}>{children}</div>
  );
};

export default Wrapper;
