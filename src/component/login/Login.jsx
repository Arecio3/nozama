import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";
function Login() {
    // allows us to change url
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        // firebase login
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        // firebase register
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // successfully created new user
            console.log(auth)
            // if user was made then we forcefully redirect user to home page
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            {/* Having type=submit allows user to press enter on keyboard to submit form */}
          <button type='submit' className='loginSignInBtn' onClick={signIn} style={{cursor:'pointer'}}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the NOZAMA Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads.
        </p>

        <button onClick={register} className='registerBtn' style={{cursor:'pointer'}}>Register Account</button>
      </div>
    </div>
  );
}

export default Login;
