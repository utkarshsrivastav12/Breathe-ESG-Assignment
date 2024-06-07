import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="welcome-container">
        <p className="welcome-text">Welcome to</p>
        <img src="./images/pic.png" alt="Breath ESG" className="logo" />
        <p className="brand-name">Breath ESG</p>
        <p className="intro-text">We Help You to track your organization's metrics as per ESG Guidelines</p>
        <p className="extra-text">Sounds interesting? <a href="#">Get in touch</a></p>
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form method="post" action="http://localhost:4000/signup">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input type="text" id="email" placeholder="Your Email ID" name="email" required />

          <label htmlFor="password">Password <span className="required">*</span></label>
          <input type="password" id="password" placeholder="Password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password <span className="required">*</span></label>
          <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirmpassword" required />

          <a href="http://localhost:3000/login" className="login-link">Already have an account?</a>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
