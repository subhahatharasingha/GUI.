import React, { useState } from 'react'
import Navbar from './Compenents/NavBar/Navbar'
import './index.css'
import About from './pages/About'
import { Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Sponsor from './pages/Sponsor'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Editprofile from './pages/Editprofile'
import Footer from './Compenents/Footer/Footer'
import Application from './pages/Application'



const App = () => {

  return (
    <div className='container'>
      <Navbar/>
      
      <Routes>
      
         <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/sponsor" element={<Sponsor/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Editprofile" element={<Editprofile/>}/>
        <Route path="/application" element={<Application/>}/>


      </Routes> 
      <Footer/>
      
    </div>
  )
}

export default App

