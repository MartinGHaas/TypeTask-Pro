import { ButtonHTMLAttributes } from 'react';
import './button.scss';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled?: boolean;

  animated?: boolean;
}

const Button = ({ isFilled = false, animated = false, ...buttonProps }: ButtonProps): JSX.Element => {
  return (
    <div className={`button-container ${buttonProps.className ? buttonProps.className : ''} `}>
      <button {...buttonProps}
        className={`${isFilled ? 'isFilled' : ''} ${animated ? 'animated' : ''}`}
      >
        {buttonProps.children}
      </button>
    </div>
  )
}

export default Button;