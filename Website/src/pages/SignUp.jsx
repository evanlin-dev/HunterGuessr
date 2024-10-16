// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="background">
      <div className="signup-container">
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
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already Have an Account? <Link to="/HunterGuessr">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
