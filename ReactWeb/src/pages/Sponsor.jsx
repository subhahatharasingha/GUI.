import React from 'react';
import './Sponsor.css'; 
import PetCard from '../Compenents/PetCard/PetCard';

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
 
          <PetCard/>
          <PetCard/>
          <PetCard/>
          <PetCard/> 
      </div>
  </div>


  <div> 
        <h3>Cats</h3>
      <div className='dogpetcard'>
 
          <PetCard/>
          <PetCard/>
          <PetCard/>
          <PetCard/> 
      </div>
  </div>

  <div> 
        <h3>Birds</h3>
      <div className='dogpetcard'>
 
          <PetCard/>
          <PetCard/>
          <PetCard/>
          <PetCard/> 
      </div>
  </div>
      

    </div>
  );
};

export default Sponsor;
