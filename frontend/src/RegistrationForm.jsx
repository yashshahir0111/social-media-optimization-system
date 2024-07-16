import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ setShowRegistrationForm, showLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/register', {
        username,
        password
      });

      // Redirect to login form after successful registration
      showLoginForm();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        // If the error is triggered due to existing user, show alert and redirect to login form
        alert('Existing user. Please try logging in.');
        showLoginForm();
      } else {
        // Handle other errors or display error message to the user
        console.error('Registration failed:', error);
        alert('Existing user');
        showLoginForm();
      }
    }
  };

  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />
      {/*Stylesheet*/}
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html: ``,
        }}
      />
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default RegistrationForm;
