import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });
  
  const [loguserId, setLoguserId] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setLoguserId(id);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put(`http://localhost:8000/users/${loguserId}`, formData);
      if (response.status === 200) {
        console.log('User Update success');

        navigate("/profile");

        setFormData({ name: "", phone: '', address: '' });
      }
    } catch (error) {
      console.error('Error Updating User:', error);
    }
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-form" onSubmit={handleFormSubmit}>
        <h2>Edit Profile</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
       
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
