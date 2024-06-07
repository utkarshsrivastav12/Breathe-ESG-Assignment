import React from 'react';
import '../SignUP/SignUp.css';

function Login() {
  return (
    <div className="sign-up-container">
      <div className="welcome-container">
        <p className="welcome-text">Welcome to</p>
        <img src="./images/445657099d99e8b8d12a2a9b5c35cf64.png" alt="Breath ESG Logo" className="logo" />
        <p className="brand-name">Breath ESG</p>
        <p className="intro-text">
          We Help You to track your organization's metrics as per the ESG Guidelines
        </p>
        <p className="extra-text">
          Sounds interesting? <a href="#">Get in touch</a>
        </p>
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form method="post" action="http://localhost:4000/login">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder="Your Email ID"
            name="email"
            required
          />
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />
          <a href="http://localhost:3000" className="login-link">Don't have an account? Sign Up</a>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
