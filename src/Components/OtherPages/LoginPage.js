import React, { useState } from 'react';
import './others.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Validation logic
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }

    // Perform login logic (API call or Firebase auth, etc.)
    console.log({ email, password, rememberMe });

    // Clear form
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input className='box'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input className='box'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-me">
            <input className='box'
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="social-btn fb"><i class="fa-brands fa-facebook"></i></button>
            <button className="social-btn google"><i class="fa-brands fa-google"></i></button>
            <button className="social-btn twitter"><i class="fa-brands fa-twitter"></i></button>
          </div>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a> <br /> <br />
          <button className='btn btn-dark'>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;