import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Compenents/AdminNavbar/AdminNavbar';
import './AdminPage.css';


const AdminPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dog');
const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8000/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  const filteredPets = pets.filter(pet => pet.category === selectedCategory);

  const handleNavigate =()=>{
    navigate("/add_dog")
  }

  const handleDelete = async (petId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this pet?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8000/pets/${petId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the deleted pet from the UI by filtering the pets array
          setPets(pets.filter(pet => pet.id !== petId));
          alert('Pet deleted successfully!');
        } else {
          alert('Failed to delete the pet.');
        }
      } catch (error) {
        console.error('Error deleting pet:', error);
        alert('Error deleting pet.');
      }
    }
  };

  return (
    <div>
      <AdminNavbar/>
      

     
     <div className='top-button'>
     <div className="category-navigation">
        <button className="category-btn" onClick={() => setSelectedCategory('Dog')} >Dog</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Cat')}>Cat</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Rabbit')}>Rabbit</button>
      </div>
      <div  className="category-navigation"><button onClick={handleNavigate}className="category-btn" >+ Add Pets</button></div>
     </div>

   
      <table className='table' border="1">
        <thead>
          <tr>
          <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Age</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet) => (
            <tr key={pet.id}>
               <td>
                <img className='image'
                  src={pet.image}
                  alt={pet.name}
                  
                />
              </td>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.description}</td>
              <td>{pet.age}</td>
              <td>
            <div className="action-icons">
              <FaEdit  className="icon edit-icon" onClick={() => navigate(`/edit_dog/${pet.id}`)} />
              <FaTrash className="icon delete-icon" onClick={() => handleDelete(pet.id)} />
            </div>
          </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
