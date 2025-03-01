import React from 'react';
import './Mypet.css';
import logout_image from '../../assets/images 4.jpg';

const Mypet = ({ pet }) => {

  

  return (
    <div className="mypetcard-container">
      <div className="image">
      <img src={pet.image} alt={pet.name} />
      </div>
      <div className="mypetcontent">
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
        <span><strong>Age:</strong> {pet.age} years</span>
        <span> <strong>Type:</strong> {pet.type}</span>
      </div>
    </div>
  );
};

export default Mypet;