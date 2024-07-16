import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const showLoginForm = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard />
      ) : (
        <>
          {!showRegistrationForm ? (
            <LoginForm setLoggedIn={setLoggedIn} setShowRegistrationForm={setShowRegistrationForm} />
          ) : (
            <RegistrationForm setShowRegistrationForm={setShowRegistrationForm} showLoginForm={showLoginForm} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
