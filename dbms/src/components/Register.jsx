/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Register() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  const handleSignUp = async () => {
    setIsSignUp(true);

    const json = {
      username,
      email,
      password,
    };

    try {
      let response = await axios.post("/api/register", json);
      console.log(response);

      // If sign-up is successful, redirect to another page
      navigate("/home"); // Replace "/home" with your desired route
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <img
        src="need-healthcare-professionals.jpg"
        alt="Healthcare Professionals"
        style={{ zIndex: -100, width: '100%' }}
      />
      <div className="form-box">
        <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            {isSignUp && (
              <div className="input-field" id="namefield">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Lost password? <a href="#">Click Here!</a>
            </p>
          </div>
          <div className="btn-field">
            <button
              type="button"
              id="signupBtn"
              className={isSignUp ? '' : 'disable'}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button
              type="button"
              id="signinBtn"
              className={!isSignUp ? '' : 'disable'}
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

