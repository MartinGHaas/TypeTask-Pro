import './buttonLoginSocial.scss';

import { FC } from 'react';

type ButtonProps = {
  text: string;
  img?: {
    src: string;
    alt?: string;
  };
  className?: string;
  handleClick?: () => void;
}

const ButtonLoginSocial: FC<ButtonProps> = ({ text, img, className, handleClick }) => {
  return(
    <div className={`buttonLoginSocial ${className || ''}`}>
      <button onClick={handleClick}>
        {img && <img src={img.src} alt={img.alt || ''} />}
        {text}
      </button>
    </div>
  )
}

export default ButtonLoginSocial;