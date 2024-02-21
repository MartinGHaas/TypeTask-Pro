import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import './input.scss';

interface InputProps {

  className?: string;

  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;

  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ className = '', labelProps = {}, inputProps }: InputProps): JSX.Element => {

  return (
    <div className={`input-container ${className}`} >
      {labelProps.children && (
        <label htmlFor={inputProps.id} {...labelProps}>
          {labelProps.children}
        </label>
      )}

      <input
        {...inputProps}
      />
    </div>
  )
}

export default Input;