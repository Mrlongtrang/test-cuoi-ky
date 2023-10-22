import React from 'react';
import Input from '../../components/Input';
import './index.css';

export default function Login() {
  return (
    <div className="flex-container">
      <div className="card">
        <div className="card-header">
          <h3>Sign in or Sign up</h3>
        </div>
        <div className="card-body">
          <Input type="email" placeholder="Email Address" required />
          <Input type="password" placeholder="Password" required />
        </div>
        <a href="/forgot-password">
          <button>Forgot Password?</button>
        </a>

        <button>Sign In</button>
      </div>
    </div>
  );
}
