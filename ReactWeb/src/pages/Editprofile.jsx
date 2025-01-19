import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    onSave(formData);
    alert('Profile updated successfully!');
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
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
