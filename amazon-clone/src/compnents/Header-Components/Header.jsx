import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { db } from '../../firebase';
import { MdSearch } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import {Link} from "react-router-dom"
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useUserStateValue } from '../SimpleStateProvider/UnameProvider';
function Header() {  
  // {window.location.reload()};
  const history=useNavigate();
const [{basket,user},dispatch]=useStateValue();
const {setUsername,userName}=useUserStateValue()
  const handleAuthentication= () =>{
    
    if(user){
      localStorage.removeItem("username")
      localStorage.removeItem("pbasket")
      history("/");
      auth.signOut();
      
    }
  }
  auth.onAuthStateChanged(Nuser =>{
    var userRef = db.collection("users").doc(Nuser?.uid);
    userRef.get().then(function(doc) {
      if (doc.exists) {
        var username = doc.data().username;
        console.log("Username:1 ", username);
          setUsername(username);
        // localStorage.setItem("username",JSON.stringify(username));
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  })
  return (
    
    <div className='header'>
    <Link to="/">
    <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt='amazon logo'
        />
        </Link>
    <div className='header_search'>
    <input className="header_searchInput" type="text" placeholder=" for depoly change from poweshell to cmd in vscode"/>
    <MdSearch size="1em" className="header_searchIcon" />
    </div>
    <div className='header_nav'>
    <Link to={!user && '/login'} style={{textDecoration:'none'}}>
      <div onClick={handleAuthentication} className='header_option'>
      <span className="header_optionLineOne">Hello {user? userName :'Guest'}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
      </div>
      </Link>
      <Link to="/orders" style={{textDecoration:'none'}}>
      <div className='header_option'>
      <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& orders</span>
      </div>
      </Link>
      <Link to="/address" style={{textDecoration:'none'}}>
      <div className='header_option'>
      <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
      </div>
      </Link>
      <Link to="/checkout" style={{textDecoration:'none'}}>
      <div className="header_optionBasket">
      {/* <MdShoppingBasket  size="2em" style={{color:"black"}}/> */}
      <MdShoppingBasket  size="2em" />
      <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
      </span>
      </div>
      </Link>
    </div>

    </div>
  )
}

export default Header