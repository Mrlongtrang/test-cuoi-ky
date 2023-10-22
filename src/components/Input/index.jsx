import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './index.css';

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const typeInput =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div>
      <div>
        <input
          type={typeInput}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            if (required) {
              if (e.target.value) {
                if (
                  type === 'email' &&
                  !e.target.value.includes('@gmail.com')
                ) {
                  setErrorMessage('Email address must include "@gmail.com"');
                } else {
                  setErrorMessage(undefined);
                }
              } else {
                setErrorMessage('Field is required');
              }
            }
            onChange?.(e);
          }}
        />
        {type === 'password' && (
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEyeInvisible size={15} color="white" />
            ) : (
              <AiFillEye size={15} color="white" />
            )}
          </span>
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}
