import React from 'react';
import './Sponsor.css'; 
import PetCard1 from '../Compenents/PetCard1/PetCard1';
import PetCard2 from '../Compenents/PetCard2/PetCard2';
import PetCard3 from '../Compenents/PetCard3/PetCard3';

const Sponsor = () => {
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
          <option value="birds">Birds</option>
        </select>
        <input type="text" placeholder="Search dogs..." className="search-input" />
        <button className="search-btn">Search</button>
      </div>
     

    <div> 
        <h3>Dogs</h3>
      <div className='dogpetcard'>
 
          <PetCard1/>
          <PetCard1/>
          <PetCard1/>
          <PetCard1/> 
      </div>
  </div>


  <div> 
        <h3>Cats</h3>
      <div className='dogpetcard'>
 
          <PetCard2/>
          <PetCard2/>
          <PetCard2/>
          <PetCard2/> 
      </div>
  </div>

  <div> 
        <h3>Birds</h3>
      <div className='dogpetcard'>
 
          <PetCard3/>
          <PetCard3/>
          <PetCard3/>
          <PetCard3/> 
      </div>
  </div>
      

    </div>
  );
};

export default Sponsor;
