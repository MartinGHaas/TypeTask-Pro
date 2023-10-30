import './buttonLoginSocial.scss';

type ButtonProps = {
  text: string;
  img?: {
    src: string;
    alt?: string;
  };
  className?: string;
  handleClick?: () => void;
}

const ButtonLoginSocial = ({ text, img, className, handleClick }: ButtonProps) => {
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