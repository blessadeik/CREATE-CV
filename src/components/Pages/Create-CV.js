import  React from 'react';
import { Link } from 'react-router-dom';
import '../projectcomponent/navbar';
import '../projectcomponent/button';


function CreateCV(){
    return(
        <div className="home">
            <navbar/>
            <div className="create-cv-container">
                <h1>This is the Create CV Page</h1>

                <div className="cv-first">
                    <p>To revamp your CV, Click here to upload current CV</p>

                </div>
                <div className="cv-second">
                    <p>Totally new to writing CV?</p>
                    <button props="Create CV"/>
                </div>
            </div>
            
            
                
        </div>
    )
}

export default CreateCV;



