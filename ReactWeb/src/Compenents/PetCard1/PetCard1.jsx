import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCard1.css';

const PetCard1 = ({ pet }) => {
  const navigate = useNavigate();
  const [loguserId, setLoguserId] = useState("");
  

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setLoguserId(id);
    }
  }, []);

  const handleAdopt = async () => {
    if (!loguserId) {
      alert("Please log in to adopt a pet.");
      return;
    }
  
    const confirmAdoption = window.confirm(`Are you sure you want to adopt ${pet.name}?`);
  
    if (!confirmAdoption) {
      return;
    }
  
    const formData = {
      userId: loguserId,
      petId: pet.id,
    };
  
    try {
      const response = await axios.post("http://localhost:8000/pets/adopt", formData);
      if (response.status === 200) {
        alert('Adoption successful');
      }
    } catch (error) {
      console.error('Error during adoption:', error);
      alert('Adoption failed. Please try again.');
    }
  };
  

  return (
    <div className="petcard-container">
      <div className="image">
        <img src={pet.image} alt={pet.name} />
      </div>
      <div className="content">
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
        <span><strong>Age:</strong> {pet.age} years</span>
        <span> <strong>Type:</strong> {pet.type}</span>
        <div className='adopt'>
          <button className="buy" onClick={handleAdopt}>Adopt</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard1;
