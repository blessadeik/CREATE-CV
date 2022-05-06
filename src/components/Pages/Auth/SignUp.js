import {useEffect, useState} from 'react';

function SignUp(){
    const [formValid, setFormValid] = useState(false);
    const [form, setForm] = useState({

    })

    const handleChange = (e) => {

    }
    const submitHandler = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        window.location= '/welcome';
    }
return(
    <div className="auth-signup">

        <div>
            <h1>Sign Up</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name="name" />
                <p>{form.name}</p>

                <input type="email-address" placeholder="Contact Email" name="email"/>
                <p>{form.email}</p>

                <input type="phone-number" placeholder="phone number" name="phone"/>
                <p>{form.phone}</p>

                <input type="country" placeholder="Country" name="country"/>
                <p>{form.phone}</p>

                <input type="address" placeholder="Address" name="address"/>
                <p>{form.address}</p>
                <p>
                    <input type="checkbox" name="agree" id="agree" defaultChecked={false}/>
                            I Agree to the Terms and Condition of Service
                    </p>
                <button props={"REGISTER"}/>
            </form>
        </div>
    </div>
)
}



export default SignUp;