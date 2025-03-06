import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
    try{
      const response = await axios.post("http://localhost:8000/users/login", 
        formData
      );

      if(response.status === 200){
        

        
          console.log('Login successful!')
          alert("Login Success");
          const id = response.data.user.id ;
          const role = response.data.user.role ;
        
          
          sessionStorage.setItem("id", id);

          if(role == "admin"){
            navigate("/admin");
          }else{
            navigate("/");
          }
          
          
          setFormData({username:"",password:""});
        }
      
    }catch (error) {
      console.error('Error during login:', error);
      }  
  };

  return (
    <div className="bg">
      <div className="signup-container">
        <h1>Log in</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
