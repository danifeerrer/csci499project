import React, { useState } from 'react';


const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAccount = async () => {
    try {
      // Simple validation
      if (!username || !password) {
        console.error('Username and password are required');
        return;
      }

      // Make API call to backend
      const response = await fetch('http://localhost:5000/api/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // You can handle the response as needed
      } else {
        console.error('Failed to add user to the database');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>
      <form style={styles.form}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="button" onClick={handleAccount} style={styles.button}>
          Create Account
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px', // Add padding here
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AccountCreation;