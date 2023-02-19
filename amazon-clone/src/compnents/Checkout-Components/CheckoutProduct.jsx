import "./CheckoutProduct.css"
import React from 'react'
import { useStateValue } from "../StateProvider/StateProvider";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const[{basket},dispatch]=useStateValue();
  const removeBasket =() =>{
    //remove the item from the basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
 
  return (
    <div className="checkoutProduct">
         <img className='checkoutProduct_image' src={image} />
        <diV className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (<button onClick={removeBasket} className="remove_button">Remove from Basket</button>)}
                
        </diV>
    </div>
  )
}

export default CheckoutProduct