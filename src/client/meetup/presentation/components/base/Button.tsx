import React from 'react';
import './Button.scss';

interface IButton {
  className?: string,
  children?: React.ReactNode,
  onClick?(event: React.MouseEventHandler<HTMLButtonElement, MouseEvent>): void,
}

Button.defaultProps = {
  className: "",
  children: null,
  onClick: null,
};

export function Button({ className, children, onClick }: IButton) {
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
    >
      <div className="text-wrapper">
        {children}
      </div>
    </button>
  );
}
