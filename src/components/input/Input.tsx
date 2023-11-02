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

  /** note that 'className' is NOT refernced to the 'input html tag', but the 'div' that contains the 'input' and the 'label' */
  className?: string;

  inputRef?: RefObject<HTMLInputElement> | null;
}

/**
 * Reusable Input Component.
 * @param {InputProps} props - Component Props.
 * @param {string} props.id - Input ID.
 * @param {string} [props.label] - Optional Input Label.
 * @param {string} [props.type] - Optional Input Type. (default: "text")
 * @param {string} [props.value] - Inputs value.
 * @param {string} [props.placeholder] - Optional Inputs Placeholder.
 * @param {string} [props.className] - Optional CSS class.
 * @param {function} [props.handleChange] - Callback Function to manipulate inputs change event.
 * @param {boolean} [props.required] - Define if Input is required.
 * @param {RefObject<HTMLInputElement> | null} [props.inputRef] - Optional ref for the Input tag.
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