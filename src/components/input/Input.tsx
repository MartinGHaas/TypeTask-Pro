import { ChangeEvent, RefObject } from 'react';

import './input.scss';

type InputProps = {
  /**
   * Provide an unique ID for the Input.
   * It turns easier for using labels and manipulating CSS wtih classNames.
   */
  id: string;

  /**
   * Creates a label for the input.
   * @default ""
   */
  label?: string

  /**
   * Changes the input type based on HTML input types.
   * Check all inputs types: https://www.w3schools.com/html/html_form_input_types.asp.
   * @default "text"
   */
  type?: string;

  /**
   * Function to handle with onChange feature.
   * @param {ChangeEvent<HTMLInputElement>} e Inputs change event.
   * @returns {void} handle actions inside the function.
   */
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Use 'required' only if true.
   * @default false
   */
  required?: boolean;

  value?: string

  placeholder?: string;

  className?: string;

  inputRef?: RefObject<HTMLInputElement> | null;
}

/**
 * Reusable Input Component.
 * @param {InputProps} props 
 * @returns {JSX.Element} Reusable Input Component.
 */
const Input = ({ label, id, placeholder, className, type, inputRef, handleChange, required, value }: InputProps): JSX.Element => {
  return (
    <div className={`input-container ${className || ''}`} >
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type || 'text'}
        placeholder={placeholder}
        id={id}
        ref={inputRef}
        onChange={handleChange}
        required={required}
        value={value}
      />
    </div>
  )
}

export default Input;