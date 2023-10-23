import { FC } from 'react';

import './input.scss';

import { HTMLInputTypes } from '../../types/types';

type InputProps = {
  id: string;
  label?: string
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypes;
}

const Input: FC<InputProps> = ({ label, id, placeholder, className, type }) => {
  return(
    <div className={`input-container ${className || ''}`} >
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      
      <input type={type || 'text'} placeholder={placeholder} id={id} />
    </div>
  )
}

export default Input;