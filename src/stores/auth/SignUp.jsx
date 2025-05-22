import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // same CSS used

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('Signup successful. You can now log in.');
    } else {
      setMessage(data.error || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Register</button>
      <p>{message}</p>
      <p>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUp;
