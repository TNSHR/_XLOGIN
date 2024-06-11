import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
   
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setMessage('Username and Password cannot be empty');
    } else if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div >
<h1>Login Page</h1>
      {isLoggedIn ? (
        <div >{message}</div>
      ) : (
        <form  onSubmit={handleSubmit}>
          <div><label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          /></div>

          <div><label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          /></div>

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>

          {message && <div className="message">{message}</div>}
        </form>
      )}
    </div>
  );
};

export default Login;
