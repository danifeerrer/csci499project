import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Simple validation
      if (!username || !password) {
        console.error('Username and password are required');
        return;
      }

      // Make API call to backend (replace with your actual API endpoint)
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log(data.message); // You can handle the response as needed
        localStorage.setItem('token', token);
        console.log(token)

        // Redirect to Home component on successful login
        navigate('/');
      } else {
        console.error('Failed to log in');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
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
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/AccountCreation">Create one</Link>.
      </p>
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
    padding: '20px',
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

export default Login;