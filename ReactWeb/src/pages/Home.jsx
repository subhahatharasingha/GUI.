import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  
  const navigate = useNavigate(); 

  const handleSignUpClick = () => {
    navigate('/signup'); 
  }; 

  return (
    <div className="container1">
      <div className='i1'>
         
      </div>
      <div className='i2'>
      <div className="item1">
        {/* <div className="item3"> */}
          <h1>Don't let love go to waste</h1>
          <p> Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives. Bringing home a pet is a life-changing experience that only spreads joy and cheer! Take a step forward and help pets start over their lives again, with love that they truly deserve. While every pet deserves a home, we truly believe every household deserves a pet!</p>
        {/* </div> */}
        {/* <div className="item4">
          
        </div> */}
      </div>
      <div className="item2">
        <div className="item5">
        <button className='Adopt' onClick={handleSignUpClick}>
             Adopt now 👉🏿
          </button>
        </div>
        <div className="item6">
          <div className='countbox'>
            <div className='waiting'>
              <h3>463</h3>
              <p>Waiting for home</p>
            </div>
            <div className='waiting'>
              <h3>554</h3>
              <p>Adopted last year</p>
            </div>
            <div className='waiting'>
              <h3>647</h3>
              <p>Rescued</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item3">
    <h2>Vet advice and expert help from our team</h2>
    <div class="advice-cards">
        <div class="cardd">
            <img src="src\assets\images15.jpg" alt="Cat" />
            <h3>How to care about your cat →</h3>
            <p>We propose purchasing awesome, logo-call kitten or cat food. Your veterinarian might be capable of investigate your new cat or kitten and determine the nice food regimen. Factors along with...</p>
        </div>
        <div class="cardd">
            <img src='src/assets/images16.jpg' alt="Dog" />
            <h3>5 Tips to Make Your Dog Happy →</h3>
            <p>1. Growth Playtime In case your dog is a dog social butterfly, playdates with different puppies might be his price ticket to bliss. However for a few dogs, humans are their...</p>
        </div>
        <div class="cardd">
            <img src="src/assets/images14.jpg" alt="Dog" />
            <h3>3 Essentials For Helping Your Dog Lose Weight →</h3>
            <p>1. Increase workout, properly Meals is prime, but no diet plan, or fitness upkeep plan, is whole without workout. The most apparent, and crucial, pastime to your dog is...</p>
        </div>
    </div>
</div>

      </div>
    </div>
  );
};

export default Home;
