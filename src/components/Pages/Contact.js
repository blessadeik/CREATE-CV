import  React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';



function Contact(){
     const [formValid, setFormValid] = useState(false);
    const [form, setForm] = useState({

    })

    const handleChange = (e) => {

    }
    const submitHandler = (e) => {
        e.preventDefault();
        sessionStorage.setItem('contactDetails', JSON.stringify({...form}))

        window.location= '/welcome';
    }
    return(
        <div className="home">
            <navbar/>

            <div className="contact-container">
                <h1>Contact Us</h1>
                 <p>Have any enquires regards our services? Kindly fill the form below</p>

            <form onSubmit={submitHandler}>

                <input type="text" placeholder="Name" name="name" />
                <p>{form.name}</p>

                <input type="email-address" placeholder="Contact Email" name="email"/>
                <p>{form.email}</p>

                <input type="text" placeholder="phone number" name="phone"/>
                <p>{form.phone}</p>

                <input type="textarea" placeholder="Message" name="message"/>
                <p>{form.message}</p>

              
                <button props="Submit"/>
            </form>
            </div>
            
    
        </div>
    )
}

export default Contact;