import { ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children: ReactNode;
  isFilled?: boolean;
  animated?: boolean;
  handleClick?: (e: React.FormEvent<HTMLElement>) => void;
  className?: string;
}

const Button = ({ children, isFilled, handleClick, className, animated }: ButtonProps) => {
  return (
    <div className={`button-container ${className ? className : ''} `}>
      <button onClick={handleClick} className={`${isFilled ? 'isFilled' : ''} ${animated ? 'animated' : ''}`}>
        {children}
      </button>
    </div>
  )
}

export default Button;