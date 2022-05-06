import  React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <div className='logo'>
                CV Generator
            </div>
            <ul>
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/About">About</Link></li>
                     <li><Link to="/Create-CV">Create CV</Link></li>
                    <li><Link to="/SignIn">Sign In</Link></li>
                    <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>
        </div>
    )
}