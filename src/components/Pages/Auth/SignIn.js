import React from 'react'
import {useEffect, useState} from 'react';


const SignIn = () => {

   const [formValid, setFormValid] = useState(false);
    const [form, setForm] = useState({

    })
  const submitHandler = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        window.location= '/welcome';
    }

  return (
    <div>
        <h1>SignIn</h1>

        <form onSubmit = {submitHandler}>
            <input type="text" placeholder="Name" name="name"/>
            <p>{form.name}</p>

            <input type="text" placeholder="Phone Number" name="phone"/>
            <p>{form.phone}</p>

            <p>
              <input type="checkbox" name="remember me" id="remember-me" defaultChecked={false}/>
              Remeber Me
            </p>
        </form>
    </div>
  )
}

export default SignIn