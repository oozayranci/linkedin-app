import React from 'react';
import './Login.css';

function Login () {
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
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile picture URL (optional)" type="text" />
        <input placeholder="email" type="email" />
        <input placeholder="Password" type="password" />
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
