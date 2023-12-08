import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Delete the token from localStorage
    localStorage.removeItem('token');

    // Perform any additional logout-related actions if needed

    // Redirect the user to the home page or another appropriate location
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
