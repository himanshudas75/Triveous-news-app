import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";

import "./login.css";

const Login=()=>{



    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
          firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
          alert(error);
        }
      };
      const { currentUser } = useContext(AuthContext);
      if (currentUser) {
        return <Navigate to="/dashboard" />;
      }
    return(
        <div class="login-page">
            <h2>Login</h2>
            <div class="form">
                
                <form class="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" name="email"/>
                    <input type="password" placeholder="password" name="password"/>
                    <button>login</button>
                    <p class="message">Not registered? <a href="/">Create an account</a></p>
                </form>
        </div>

        </div>
        );
}

export default Login;