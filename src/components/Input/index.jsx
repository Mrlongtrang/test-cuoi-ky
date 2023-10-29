import React, { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
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
                if (type === 'email' && !e.target.value.includes('@')) {
                  setErrorMessage('Email address must include "@"');
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
              <EyeInvisibleFilled size={15} color="white" />
            ) : (
              <EyeFilled size={15} color="white" />
            )}
          </span>
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}
