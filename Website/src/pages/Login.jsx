import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/Pano'); 
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

    return (
     <div className= "outer-container">
        <div className="login-container">
          <div className="login-box">
            <h1>Hunter Guesser</h1>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button type="submit">Login</button>
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
              </div>
            </div>
        {/* <div className="login-container">*/}
        <div className= "leaderboard-button">
            <button type="leaderboard-button" onClick={() => navigate('/leaderboard')}>Check out the Leaderboard!</button>
        </div>
     </div>
  );
};

export default Login;
