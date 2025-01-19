import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Log in Data:', formData);
    
  };

  return (
    <div className="bg">
      <div className="signup-container">
        <h1>Log in</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
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
            Log in
          </button>
        </form>
        <div>
          <Link className='lnk' to={'/signup'}>Create new account?</Link>
        </div>
      </div>

    </div>
  );
};

export default Login;
