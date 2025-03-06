import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo_dark from '../../assets/logo-black.png';
import logout_image from '../../assets/logout-image.png';
import profile_icon from '../../assets/pimage.png';


const AdminNavbar = () => {
  const location = useLocation();
  const [loguserId, setLoguserId] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setLoguserId(id);
    }
  }, []);

  return (
    <div className="navbar">
      <img src={logo_dark} alt="Company Logo" className="logo" />
      <img src={profile_icon} alt="Profile Icon" className="picon" />
    </div>
  );
};

export default AdminNavbar;
