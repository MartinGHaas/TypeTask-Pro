import { ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  /**
   * Changes the button UI background from transparent
   * to a colorful one.
   * @default false
   */
  isFilled?: boolean;

  /**
   * Animates the button hover w/ a default
   * left to right animation.
   * @default false
   */
  animated?: boolean;

  children: ReactNode;

  handleClick?: (e: React.FormEvent<HTMLElement>) => void;

  className?: string;
}

/**
 * Reusable Button Component
 * @param {ButtonProps} props Button Component props
 * @param {ReactNode} props.children - Buttons content.
 * @param {boolean} [props.isFilled] - Changes button background.
 * @param {boolean} [props.animated=false] - Animates button hover.
 * @param {(e: React.FormEvent<HTMLElement>) => void} [props.handleClick] - Callback handleClick function.
 * @param {string} [props.className] - CSS Class to button container div.
 * @returns {JSX.Element} Reusable Button Component
 */
const Button = ({ children, isFilled, handleClick, className, animated }: ButtonProps): JSX.Element => {
  return (
    <div className={`button-container ${className ? className : ''} `}>
      <button onClick={handleClick} className={`${isFilled ? 'isFilled' : ''} ${animated ? 'animated' : ''}`}>
        {children}
      </button>
    </div>
  )
}

export default Button;