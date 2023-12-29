import React,{useState} from "react";
import { Navigate } from "react-router-dom";
import firebaseConfig from "../firebase";

import "./login.css";


const Register = ()=>{
    const [currentUser, setCurrentUser] = useState(null);    
    const handleSubmit = (e) => {
      e.preventDefault();    
      const { email, password } = e.target.elements;
      
      try {
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
        setCurrentUser(true);
      } catch (error) {
        alert(error);
      }
    };
    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }
    

    return(
        <div class="login-page">
            <h2>Register</h2>
            <div class="form">
                <form class="register-form" onSubmit={handleSubmit}>
                    <input type="name" placeholder="name" name="fullName"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <input type="email" placeholder="email address" name="email"/>
                    <button>create</button>
                    <p class="message">Already registered? <a href="/login">Sign In</a></p>
                </form>
                
        </div>

        </div>
        );
}

export default Register;