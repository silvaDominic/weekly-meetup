import React, { ChangeEvent, useState } from 'react';
import './TextField.scss';

interface ITextField {
  id: string,
  value: string,
  name?: string,
  label?: string,
  placeholder?: string
  rules?: string,
  hideText?: boolean,
  onChange?(event: ChangeEvent<HTMLInputElement>): void,
}

TextField.defaultProps = {
  name: "",
  label: "",
  placeholder: "",
  rules: "",
  hideText: false,
  onChange: null,
};

export function TextField({ id, value, name, label, placeholder, rules, hideText, onChange }: ITextField) {
  const [errors, setErrors] = useState([]);

  return (
    <div className="form-field">
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          `form-field-input
          ${value.length === 0 ? 'is-empty' : ''}
          ${hideText ? 'hide-text' : ''}`
        }
        style={{ paddingTop: label ? '1.2rem' : '' }}
        value={value}
        onChange={onChange}
        type={hideText ? 'password' : 'text'}
      />
      {label && <label className={`form-field-label ${placeholder!.length === 0 ? '' : 'label-active'}`} htmlFor={id}>{ label }</label>}

      <div className="form-errors">
        <div className="input-error">{errors[0]}</div>
      </div>
    </div>
  );
}
