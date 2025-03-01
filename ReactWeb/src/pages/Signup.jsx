import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8000/users/signup", formData);
      if (response.status === 200) {
        console.log('Registration successful!');
        alert('Registration successful!');
        navigate("/login");
        setFormData({ name: "", username: "", password: "" });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="bg">
      <div className="signup-container">
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
        <input
  type="text"
  id="name"
  name="name"
  placeholder="Enter your name"
  value={formData.name}
  onChange={handleChange}
  required
/>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Enter your email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
        <div>
          <Link className='lnk' to={'/login'}>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
