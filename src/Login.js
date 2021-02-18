import React, { useState } from 'react';
import { auth } from "./firebase"
import './Login.css';

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const loginApp = (e) => {
      e.preventDefault();
  };
  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_14_LinkedInHBR1.jpg"
        alt=""
      />

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Profile picture URL (optional)" type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit" onClick={loginApp}>Sign In</button>
      </form>
      <p>
        Not a member? {' '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
