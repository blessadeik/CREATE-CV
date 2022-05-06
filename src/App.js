import react from 'react';
import { Link } from 'react-router-dom';
import About from './components/Pages/About.js';
import Home from './components/Pages/Home.js';
import CreateCV from './components/Pages/Create-CV.js';
import Contact from './components/Pages/Contact.js';
import SignUp from './components/Pages/Auth/SignUp.js';
import SignIn from './components/Pages/Auth/SignIn.js';



// import Navbar from 'components/Navbar';
import { 
  BrowserRouter,
  Routes, 
  Route } from "react-router-dom";

import './App.css';
import './scss/main.scss';

function App() {
  return (
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Create-CV" element={<CreateCV/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path ="/SignUp" element={<SignUp/>}/>
        <Route path ="/SignIn" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
