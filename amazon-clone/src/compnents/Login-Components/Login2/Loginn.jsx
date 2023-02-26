import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../Login2/Loginn.css"
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';
function Loginn() {
  const history = useNavigate ();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')  
  const signIn = e =>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email,password)
    .then( auth =>{
      history('/')
    })
    .catch(error => alert(error.message))
  }
  return (
    <div className='login'>  
      <div className="login_left">
          <form className='login_form'>
          <h1 className='login_header'>Login</h1>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='input_style' placeholder='Email' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}  className='input_style' placeholder='Password'  />
            <br />
            <button type='submit' className='login_btn'  onClick={signIn}>login</button>
            <h5>forgot password?</h5>
          </form>
          
      </div>
      <div className="login_right">
      <div className="register_form">
        <h1 className='register_header'>Register</h1>
        <p className='register_info'>Create an account to expedite future checkouts, view and update your account details, track your order status, and history.</p>
        <Link to='/register'>
        <button className='register_btn' >Register</button>
        </Link>
      </div>
      </div>
    
    </div>
  )
}

export default Loginn