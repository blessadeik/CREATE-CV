import  React from 'react';
import { Link } from 'react-router-dom';



function About(){
    return(
        <div>
            <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/create-cv">Create CV</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                </ul>
            <h2>Wanna Know about this Website? </h2>
        </div>
    )
}

export default About;