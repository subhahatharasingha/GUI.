import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container2">
      <div className="aitem1">
        <h1>About<span className="highlight"> us</span> </h1>
        <p>
          At PetPlace, we’re more than just a pet adoption service - we're a team of animal lovers dedicated to creating lasting bonds. With years of experience in pet care and welfare, we understand the unique personalities and needs of each animal in our care.
        </p>
      </div>
      <div className="aitem2">
        <h2> Discover the Future of Pet Care with Our App! </h2>
        <p>Are you ready to make a difference in the lives of adorable pets?  Our app is here to revolutionize how you connect with adoptable pets and access veterinary services!</p>
        
        <h3> What We Offer:</h3>
        <ul>
          <li>✔️ <strong>Browse Adoptable Pets:</strong> Fall in love with your future furry friend by exploring our wide range of adoptable pets, all waiting for a loving home.</li>
          <li>✔️ <strong>Submit Applications:</strong> Found the perfect pet? Easily apply to adopt through our user-friendly application system.</li>
          <li>✔️ <strong>Book Veterinary Appointments:</strong> Keep your pets happy and healthy by booking vet appointments in just a few taps.</li>
          <li>✔️ <strong>Find Nearby Services:</strong> Locate pet-friendly services, from clinics to grooming centers, all in your area.</li>
        </ul>

        <p>🌍 Join the community making a difference—download our app today!</p>
        <p>💖 Because every pet deserves a home, and every owner deserves support.</p>
      </div>
    </div>
  );
};

export default About;
