import React from 'react';
import '../data/Logout.css';

const Logout = () => {
  const handleLogout = () => {
    // Delete the token from localStorage
    localStorage.removeItem('token');

    // Perform any additional logout-related actions if needed

    // Redirect the user to the home page or another appropriate location
    window.location.href = '/';
  };
  const username = localStorage.getItem('Username')

  return (
    <div className="logout-container">
      <h2>{username}, it was a pleasure having you back < br/> in our app, we hope you come back soon </h2>
      <button className="logout-button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Logout;
