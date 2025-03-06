import React, { useEffect, useState } from 'react';
import { Route, Routes ,useLocation} from 'react-router-dom';
import AdminNavbar from './Compenents/AdminNavbar/AdminNavbar';
import Footer from './Compenents/Footer/Footer';
import Navbar from './Compenents/NavBar/Navbar';
import './index.css';
import About from './pages/About';
import AdminPage from './pages/AdminPage';
import Application from './pages/Application';
import Contact from './pages/Contact';
import Editprofile from './pages/Editprofile';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Sponsor from './pages/Sponsor';
import AddDog from './pages/AddDog';
import EditDog from './pages/EditDog';

const App = () => {
  const location = useLocation(); 
  const hideNavbar = ["/admin","/add_dog"].includes(location.pathname);

  return (
    <div className="container">
     
     {!hideNavbar && <Navbar/>}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Editprofile" element={<Editprofile />} />
        <Route path="/application" element={<Application />} />
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/add_dog' element={<AddDog/>}/>
        <Route path="/edit_dog/:petId" element={<EditDog/>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
