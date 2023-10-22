import React from 'react';
import './index.css';
import Input from '../../components/Input';
export default function ForgotPassword() {
  return (
    <div className="flex-container">
      <div className="card">
        <div className="card-header">
          <h1>Forgot Your Password ?</h1>
          <h3>
            Please fill in the email that you used to register. You will be sent
            an email with instructions on how to reset your password.
          </h3>
          <div className="card-body">
            <Input type="email" placeholder="Email Address" required />
          </div>
          <button>Send Email</button>
        </div>
      </div>
    </div>
  );
}
