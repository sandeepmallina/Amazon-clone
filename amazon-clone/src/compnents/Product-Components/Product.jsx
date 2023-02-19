import React,{useContext, useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './Product.css'
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useUserStateValue } from '../SimpleStateProvider/UnameProvider';
function Product(props) {
const history=useNavigate();
  const[state,dispatch]=useStateValue();
  const[isAdding,setIsAdding]=useState(false);
  const{getItem,getCount} =useUserStateValue();
  // console.log("this is basket", basket);
const addToBasket=()=>{
  //dispatch the item into to data layer
  console.log(state.user);
  setIsAdding(true)
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:props.id,
      title:props.title,
      image:props.image,
      price:props.price,
      rating:props.rating,
    } ,
  });
};
const removeBasket =() =>{
  //remove the item from the basket
  dispatch({
    type:"REMOVE_FROM_BASKET",
    id:props.id,
  })
}

// const inCart=myProductcontext.getItem(props.id);
// console.log("this is in cart ",inCart)
const addToPreview=()=>{
  // console.log(myProductcontext.userstate.username)
  localStorage.setItem("pbasket",JSON.stringify([{
    id:props.id,
    title:props.title,
    image:props.image,
    price:props.price,
    rating:props.rating,
  }]))
history("/productinfo")
}
const isPresent=getItem(props.id);
const count=getCount(props.id);
  return (
    <div className='product'  style={{borderRadius:'10px'}}>
      <div className='product_info' onClick={addToPreview}>
          <p>{props.title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className='product_rating'>
          {Array(props.rating).fill().map((_,i)=>(
            <p>⭐</p>
          ))}
          </div>
        </div>
          <img  alt='product1' onClick={addToPreview}
          src={props.image}/>
           {(!isPresent)?<button onClick={addToBasket} className="addbasket_button"> Add to Basket</button>:
           <div className='cart_bar'>
           <button onClick={removeBasket} className="decrement_btn">-</button>
           <p className='count_items'>{count}</p>
           <button onClick={addToBasket}  className="increment_btn">+</button>
           </div>
           }
          
       
    </div>
  )
}

export default Product