import React from 'react';
import './Mypet.css';
import logout_image from '../../assets/images 4.jpg';

const Mypet = () => {
  return (
    <div className="mypetcard-container">
      <div className="image">
        <img src={logout_image} alt="Pet" />
      </div>
      <div className="mypetcontent">
        <h3>Card Title</h3>
        <p>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <span className="mypetprice">Rs. 20,000</span>
      </div>
    </div>
  );
};

export default Mypet;