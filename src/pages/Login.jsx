import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import '../style.css'

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

      setLoading(true);
  
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {

       await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/')
          })
          .catch((error) => {
            setErr(true)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage)
          });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Gang Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {loading && <span> logging in...</span>}
          {err && <span>check credentials again</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
