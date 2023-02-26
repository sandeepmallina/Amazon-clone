import React from 'react'
import './Login.css'
// for  useNavigate
//https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import {Link, useNavigate  } from "react-router-dom"
import { useState } from 'react'
import { auth } from '../../firebase'
// import { useStateValue } from '../StateProvider/StateProvider'
// import { useContext } from 'react'
// import { UserContext } from '../App'
import { db } from '../../firebase'
function Login() {
  
  const history = useNavigate ();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const[showUsername,setShowUsername]=useState(false);
  // const myUsercontext=useContext(UserContext)
  
  const signIn = e =>{
    e.preventDefault();
    setShowUsername(false);
    // myUsercontext.userdispatch({
    //   type:"SET_USER",
    //   username1: username
    // })
    // localStorage.setItem("username",JSON.stringify(username));
    // console.log("user name is ",myUsercontext.userstate.username);
    
    auth.signInWithEmailAndPassword(email,password)
    .then( auth =>{
      history('/')
      // console.log("this from auth",auth.user.displayName)
    })
    .catch(error => alert(error.message))
  }
  const register = e=>{
    e.preventDefault();
    setShowUsername(true);
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        // it successfully created a new user with email and password
        var userRef = db.collection("users").doc(auth.user.uid);
        // userRef.updateProfile({
        //   displayName: "John Doe"
        // });
        // use to add custom data variables of user 
        userRef.set({
          username:username
        });
        if (auth) {
            history('/')
        }
        // console.log(auth.user.displayName)
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to="/">
        <img className="login_logo" alt=''
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                     />
        </Link>     
        <div className='login_container'>
                <h1>Sign-in</h1>

                <form >
                    {
                      showUsername&&<> <h5>Username</h5>
                    <input type='text' value={username}  onChange={e => setUsername(e.target.value)} /></>
                    }
                    <h5>E-mail</h5>
                    <input type='text'  value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}  />

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button  onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
    </div>
  )
}

export default Login