import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import './index.css';
import { useLogin } from './hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();
  const { login, isLoggedIn } = useLogin();

  if (isLoggedIn()) {
    navigate({ pathname: '/' });
    return null;
  }

  async function loginHandler() {
    const user = await login(email, password);
    if (user) {
      setErrorMessage(undefined);
      navigate({ pathname: '/' });
      return;
    }

    setErrorMessage('Invalid user or password!');
  }

  return (
    <div className="flex-container">
      <div className="card">
        <div className="card-header">
          <h3>Sign in or Sign up</h3>
        </div>
        <div className="card-body">
          <Input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>{errorMessage}</div>
        <a href="/forgot-password">
          <button>Forgot Password?</button>
        </a>

        <button onClick={loginHandler}>Sign In</button>
      </div>
    </div>
  );
}
