import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import './SignIn.css';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      login(data.user, data.token);
      navigate('/dashboard'); // redirect to dashboard/home
    } else {
      setMessage(data.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="signin-form">
      <h2>Sign In</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Login</button>
      <p>{message}</p>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
};

export default SignIn;
