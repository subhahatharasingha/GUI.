import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Mypet from '../Compenents/Mypetscard/Mypet';
import profile_icon from '../assets/pimage.png';

const Profile = () => {
  const navigate = useNavigate(); 

  
  const [userData, setUserData] = useState({
    name: 'subhnya kalpanee',
    email: 'kal.doe@example.com',
    phone: '0712546985',
    address: '123 Main Street, colombo',
    bio: 'Animal lover and proud pet owner.',
  });

  const [adoptablePets, setAdoptablePets] = useState([
    { name: 'Buddy', type: 'Dog', age: '2 years', image: 'dog.jpg' },
    { name: 'Mittens', type: 'Cat', age: '1 year', image: 'cat.jpg' },
  ]);

  const [nearbyCenters, setNearbyCenters] = useState([
    { name: 'Springfield Vet Center', address: '456 Elm Street', phone: '987-654-3210' },
    { name: 'Happy Paws Clinic', address: '789 Oak Avenue', phone: '654-321-0987' },
  ]);

  useEffect(() => {
    
  }, []);

  const handleEditClick = () => {
    navigate('/Editprofile');
  };

  return (

    <div className="profile-container">
      <div className="profile-card">
        <img src={profile_icon} alt="" />
        <h2 className="profile-header">User Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio}
          </p>
        </div>
        <button className="profile-edit-btn" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>

    <div className='fbox2'>
      <div className="adopt-pets-card">
        <div className='mypet'><h2>My Pets</h2></div>
        <div className='mypets-details'>
          <Mypet/>
          <Mypet/>
        </div>
      
       
      </div>
        

      <div className="map2-section">
                <h3>My Nearby Veterinary Centers</h3>
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.292541137416!2d-0.13011638464355944!3d51.507451079647035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f3c891c38b9%3A0xc8c828c7b8e9d643!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1619178831442!5m2!1sen!2suk" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
      </div>
    </div>
  );
};

export default Profile;
