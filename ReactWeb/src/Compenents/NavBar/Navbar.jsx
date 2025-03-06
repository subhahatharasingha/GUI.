import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo_dark from '../../assets/logo-black.png';
import logout_image from '../../assets/logout-image.png';
import profile_icon from '../../assets/pimage.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const subMenuRef = useRef(null);

  const [signupvisible, setsignupvisible] = useState(true);
  const [profilevisible, setprofilevisible] = useState(false);
  const [loguserId, setLoguserId] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    setLoguserId(id);
    if (id) {
      setprofilevisible(true);
      setsignupvisible(false);
    }
  }, [location.pathname]);
  

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const toggleMenu = () => {
    if (subMenuRef.current) {
      subMenuRef.current.classList.toggle('open-menu');
    }
  };

  return (
    <div className="navbar">
      <img src={logo_dark} alt="" className="logo" />

      <ul>
        <li><Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
        <li><Link className={`link ${location.pathname === "/sponsor" ? "active" : ""}`} to="/sponsor">Sponsor a pet</Link></li>
        <li><Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
        <li><Link className={`link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact us</Link></li>
        {profilevisible && <li><Link className={`link ${location.pathname === "/profile" ? "active" : ""}`} to="/profile">Profile</Link></li>}
      </ul>

      {profilevisible && <img src={profile_icon} alt="" className="picon" onClick={toggleMenu} />}
      
      <div ref={subMenuRef} className="sub-menu-wrap">
        <div className="sub-menu">
          <div className="user-imfo">
            <img src={profile_icon} alt="" />
            <h3>My Profile</h3>
            
          </div>
          <hr />
          <Link to="/Editprofile" className="sub-menu-link">
            <img src={profile_icon} alt="" />
            <p>Edit Profile</p>
            <span>{'>'}</span>
          </Link>
          <Link to="/profile" className="sub-menu-link">
            <img src={profile_icon} alt="" />
            <p>My Profile</p>
            <span>{'>'}</span>
          </Link>
          <Link to="/logout" className="sub-menu-link">
            <img src={logout_image} alt="" />
            <p>Log Out</p>
            <span>{'>'}</span>
          </Link>
        </div>
      </div>

      {signupvisible && <button className="login" onClick={handleSignUpClick}>Sign up</button>}
    </div>
  );
};

export default Navbar;
