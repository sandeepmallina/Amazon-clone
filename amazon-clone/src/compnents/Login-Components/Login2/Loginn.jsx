import React from 'react'
import "../Login2/Loginn.css"

function Loginn() {
  return (
    <div className='Login'>  
        <div className='Login_container'>
                <h1 className='login_header'>LOGIN</h1>
                <form className='login_form'>
                    <h2 className='title'>Email</h2>
                    <input type='text' className='email'  />

                    <h2 className='title'>Password</h2>
                    <input type='password' className='password'  /><br />
                    <button type='submit' className='Login_signInButton'>Login</button>
                    <a href="#" className='forgrt_password'>Forgotten your password?</a>
                </form>

                {/* <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p> */}
                
          </div>
          <div className='Register_Container'>
          {/* <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p> */}
                <h1 className='register_header'>REGISTER</h1>
                <p className='about_register'>
                Create an account to expedite future checkouts, view and update your account details,
                 track your order status, and history.
                </p>
                <button   className="Register_Button">Register</button>
          </div>
    </div>
  )
}

export default Loginn