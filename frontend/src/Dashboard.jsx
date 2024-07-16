import React, { useState } from 'react';
import Home from './Home';
import AddForm from './AddForm';//chatbot
import App from './Profile';//suggestion form
import Suggestions from './Suggestions';
import './Navbar.css';

const Dashboard = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  let content;
  if (page === 'home') {
    content = <Home />;
  } 
   if (page === 'add-form') {
    content = <AddForm />;
  } 
  if (page === 'profile') {
    content = <App />;
  }
  if (page === 'Suggestions') {
    content = <Suggestions />;
  }

  return (
    <>
    {/* Navbar */}
    <nav id="navbar">
      <ul className="navbar-items flexbox-col">
        <li className="navbar-logo flexbox-left">
          <a className="navbar-item-inner flexbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 1438.88 1819.54"
            >
              <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
              <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
            </svg>
          </a>
        </li>
        
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left" onClick={() => navigateTo('home')}>
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="home-outline" />
            </div>
            <span className="link-text"  >Home</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left" onClick={() => navigateTo('profile')}>
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="folder-open-outline" />
            </div>
            <span className="link-text" >Profile</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left"   onClick={() => navigateTo('Suggestions')}>
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="pie-chart-outline" />
            </div>
            <span className="link-text">suggestions</span>
          </a>
        </li>
        
        
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left"   onClick={() => navigateTo('add-form')} >
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="settings-outline" />
            </div>
            <span className="link-text">ask me</span>
          </a>
        </li>
      </ul>
    </nav>
    {/* Main */}
    <main id="main" className="flexbox-col">
      {content}
    </main>
  </>
  
  );
};

export default Dashboard;
