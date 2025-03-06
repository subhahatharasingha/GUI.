import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Compenents/AdminNavbar/AdminNavbar';
import './AddDog.css';

const AddDog = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("age", age);
    formData.append("image", image); // Append image file
  
    try {
      const response = await fetch("http://localhost:8000/pets", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Dog added successfully!");
        navigate("/admin");
      } else {
        alert("Error adding dog!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding dog!");
    }
  };
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store file object instead of URL
  };

  return (

    <div className="form-container">
        <AdminNavbar/>
      <h2 style={{marginTop:100}}>Add Dog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
           
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" onChange={handleImageChange} required />
        </div>

        <button type="submit" className="submit-btn">
          Add Dog
        </button>
      </form>
    </div>
  );
};

export default AddDog;
