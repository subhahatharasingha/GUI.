import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import image11 from '../assets/images 11.jpg';
import image12 from '../assets/images29.jpg';
import image13 from '../assets/images34.jpg';

const Home = () => {
  const navigate = useNavigate();

  const images = [image11, image12, image13];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container1">
      <div className='i1' style={{ backgroundImage: `url("${images[currentImage]}")` }}></div>
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
            <img src="src\assets\images27.webp" alt="Cat" />
            <h3>🏡 General Care →</h3>
            <p>✔ Provide a Safe Environment – Ensure your home is pet-friendly and free from hazards like toxic plants, sharp objects, or small items they could swallow.</p>
            <p>✔ Give Them Space – Every pet needs a comfortable resting area and a safe spot to retreat when stressed.</p>
        </div>
        <div class="cardd">
            <img src='src/assets/images24.jpeg' alt="Dog" />
            <h3>🥦 Nutrition & Hydration →</h3>
            <p>✔ Balanced Diet – Feed your pet high-quality food suited to their species, breed, and age. Avoid human food unless it's pet-safe.</p>
            <p>✔ Fresh Water – Always have clean water available, especially in hot weather.</p>
            <p>✔ Portion Control – Overfeeding can lead to obesity, so follow vet recommendations.</p>
        </div>
        <div class="cardd">
            <img src="src/assets/images23.jpg" alt="Dog" />
            <h3>🚶 Exercise & Mental Stimulation →</h3>
            <p>✔ Daily Walks & Playtime – Regular exercise keeps pets physically fit and mentally stimulated.</p>
            <p>✔ Training & Enrichment – Use toys, puzzles, and basic training to engage their mind.</p>
        </div>
        <div class="cardd">
            <img src="src/assets/images25.jpg" alt="Dog" />
            <h3>🩺 Health & Hygiene →</h3>
            <p>✔ Regular Vet Visits – Schedule routine check-ups and vaccinations.</p>
            <p>✔ Parasite Prevention – Use flea, tick, and worm prevention as recommended.</p>
            <p>✔ Dental Care – Brush their teeth or provide dental treats to avoid gum disease.</p>
        </div>
        <div class="cardd">
            <img src="src/assets/images22.jpg" alt="Dog" />
            <h3>❤️ Love & Attention</h3>
            <p>✔ Quality Time – Spend time bonding with your pet daily to strengthen your relationship.</p>
            <p>✔ Respect Their Boundaries – Some pets love cuddles, while others prefer space. Learn to read their signals.</p>
        </div>
    </div>
</div>

      </div>
      </div>
   
  );
};

export default Home;
