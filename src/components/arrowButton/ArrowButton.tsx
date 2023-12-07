import { MouseEvent, CSSProperties } from 'react';
import './arrowButton.scss';

type ArrowButtonProps = {
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ArrowButton = ({ handleClick, direction = 'right', className = '' }: ArrowButtonProps) => {
  const transformStyle: CSSProperties = {
    transform: `rotate(${direction === 'right' ? 0 : direction === 'down' ? 90 : direction === 'left' ? 180 : 270}deg)`
  }

  return (
    <button className={`arrow-button ${className}`} onClick={handleClick} style={transformStyle}>
      <img src="arrow.svg" alt="" />
    </button>
  )
}

export default ArrowButton;