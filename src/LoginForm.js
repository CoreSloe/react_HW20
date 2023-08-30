// LoginForm.js

import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai"; // Імпорт іконки AiOutlineUser
import "./LoginForm.css";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {};

  return (
    <div className="login-form">
      <div className="profile-icon">
        <AiOutlineUser size={40} /> {/* Використовую іконку AiOutlineUser */}
      </div>
      <h2>Sign in</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="remember-me">
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
      </div>
      <div className="forgot-password">
        <a href="/" className="sign-in-link">
          Forgot password?
        </a>
      </div>
      <button onClick={handleLogin}>Sign in</button>
      <div className="sign-up">
        <a href="/" className="sign-up-link">
          Don't have an account? Sign Up
        </a>
      </div>
      <div className="copyright">Copyright © Your Website 2023</div>
    </div>
  );
};

export default LoginForm;
