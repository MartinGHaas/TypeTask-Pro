import { ChangeEvent, FC, RefObject } from 'react';

import './input.scss';

type InputProps = {
  id: string;
  label?: string
  placeholder?: string;
  className?: string;
  type?: string;
  inputRef?: RefObject<HTMLInputElement> | null;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string
}

const Input: FC<InputProps> = ({ label, id, placeholder, className, type, inputRef, handleChange, required = true, value }) => {
  return(
    <div className={`input-container ${className || ''}`} >
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      
      <input
        type={type || 'text'}
        placeholder={placeholder}
        id={id} ref={inputRef}
        onChange={handleChange}
        required={required}
        value={value}
      />
    </div>
  )
}

export default Input;