import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css"; // Import the CSS file

const LoginForm = ({ setLoggedIn, setShowRegistrationForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.data.success) {
        setLoggedIn(true);
      } else {
        alert("Incorrect username or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Incorrect username or password");
      } else {
        console.error(error);
        // Handle other types of errors here
      }
    }
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
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
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <button onClick={handleRegisterClick}>Register</button>
      </form>
      
    </>
  );
};

export default LoginForm;
