import React from 'react';
import './PetCard3.css';
import logout_image from '../../assets/images 4.jpg';
import { useNavigate } from 'react-router-dom';

const PetCard3 = () => {

  const navigate =useNavigate();
  const handlesAdopt =() =>{
    navigate('/application');
  };
  return (
    <div className="petcard-container">
      <div className="image">
        <img src={logout_image} alt="Pet" />
      </div>
      <div className="content">
        <h3>Card Title</h3>
        <p>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <span className="price">Rs. 20,000</span>
        <button className='buy' onClick={handlesAdopt}>Adopt</button>
      </div>
    </div>
  );
};

export default PetCard3;
