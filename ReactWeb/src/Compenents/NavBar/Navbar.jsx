import React, { useRef ,useState} from 'react';
import './Navbar.css';
import logo_dark from '../../assets/logo-black.png';
import profile_icon from '../../assets/pimage.png';
import logout_image from '../../assets/logout-image.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const subMenuRef = useRef(null);

  const [signupvisible, setsignupvisible] = useState(true)
  const [profilevisible, setprofilevisible] = useState(false)
  //const [active, setActive] = useState(false);
 

  const handleSignUpClick = () => {
    navigate('/signup');
  };

   


  const toggleMenu = () => {
    if (subMenuRef.current) {
      subMenuRef.current.classList.toggle('open-menu');
    }
  };

  return (
    <div className= 'navbar'>
      <img src={logo_dark} alt='' className='logo' />
      
      <ul>
        <li><Link className= 'link' to="/">Home</Link></li>
        <li><Link className='link' to="/sponsor">Sponsor a pet</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/contact">Contact us</Link></li>
        {profilevisible && <li><Link className='link' to="/profile">Profile</Link></li>}
      </ul>
      {profilevisible && <img src={profile_icon} alt='' className='picon' onClick={toggleMenu} />}
      <div ref={subMenuRef} className="sub-menu-wrap">
        <div className="sub-menu">
          <div className="user-imfo">
            <img src={profile_icon} alt="" />
            <h3>James Aldrino</h3>
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
    {signupvisible &&   <button className="login" onClick={handleSignUpClick}>
        Sign up
      </button>}
    </div>
  );
};

export default Navbar;
