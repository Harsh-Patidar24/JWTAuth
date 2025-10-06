import React, { useState } from "react";

const LoginForm = () => {
  return (
    <form>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Email:</label>
        <input type="email" id="password" />
      </div>
      <div>
        <label htmlFor="password">Role:</label>
        <input type="text" id="password" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
