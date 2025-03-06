import React, { useEffect, useState } from 'react';
import PetCard1 from '../Compenents/PetCard1/PetCard1';
import './Sponsor.css';

const Sponsor = () => {
  const [pets, setPets] = useState({
    dogs: [],
    cats: [],
    rabbits: [],
  });
  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:8000/pets');
        const data = await response.json();
  
        const filteredPets = data.filter(pet => pet.userId === null); // Filter pets with userId null
  
        const categorizedPets = {
          dogs: filteredPets.filter(pet => pet.category === 'Dog'),
          cats: filteredPets.filter(pet => pet.category === 'Cat'),
          rabbits: filteredPets.filter(pet => pet.category === 'Rabbit'),
        };
        
        setPets(categorizedPets);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
  
    fetchPets();
  }, []);
  

  return (
    <div className="sponsor-container">
      <h1>Every Pet Deserves a Loving Home.</h1>
      <h2>
        <span className="highlight">Adopt</span> a Pet Today
      </h2>
      <p>
        Browse our available animals and learn more about the adoption process.
        Together, we can rescue, rehabilitate, and rehome pets in need. Thank you for supporting our mission to bring joy to families through pet adoption.
      </p>
      <div className="search-bar">
        <select className="dropdown">
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="birds">Rabbit</option>
        </select>
        <input type="text" placeholder="Search dogs..." className="search-input" />
        <button className="search-btn">Search</button>
      </div>

    <div> 
        <h3>Dogs</h3>
      <div className='dogpetcard'>
 
      {pets.dogs.map(pet => (
            <PetCard1 key={pet.id} pet={pet} />
          ))}
      </div>
  </div>

  <div> 
        <h3>Cats</h3>
      <div className='dogpetcard'>
 
      {pets.cats.map(pet => (
            <PetCard1 key={pet.id} pet={pet} />
          ))}
      </div>
  </div>

  <div> 
        <h3>Rabbit</h3>
      <div className='dogpetcard'>
 
      {pets.rabbits.map(pet => (
            <PetCard1 key={pet.id} pet={pet} />
          ))}
      </div>
  </div>
      

    </div>
  );
};

export default Sponsor;
