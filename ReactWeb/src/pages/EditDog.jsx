import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../Compenents/AdminNavbar/AdminNavbar';

const EditDog = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null); // Changed from string to file
  const [preview, setPreview] = useState(''); // Preview for existing image

  useEffect(() => {
    fetch(`http://localhost:8000/pets/${petId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setCategory(data.category);
        setType(data.type);
        setDescription(data.description);
        setAge(data.age);
        setPreview(data.image); // Set the existing image URL for preview
      })
      .catch((error) => console.error('Error fetching pet:', error));
  }, [petId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Show preview of new image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("age", age);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`http://localhost:8000/pets/${petId}`, {
        method: 'PUT',
        body: formData, // No need to set Content-Type, FormData handles it
      });

      if (response.ok) {
        alert('Dog updated successfully!');
        navigate("/admin");
      } else {
        alert('Error updating dog!');
        console.error('Failed to update dog:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating dog!');
    }
  };

  return (
    <div className="form-container">
      <AdminNavbar />
      <h2 style={{ marginTop: 100 }}>Edit Dog</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {preview && (
          <div className="image-preview">
            <p>Current Image:</p>
            <img src={preview} alt="Preview" style={{ width: "200px", height: "auto", marginTop: "10px" }} />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Update Dog
        </button>
      </form>
    </div>
  );
};

export default EditDog;
