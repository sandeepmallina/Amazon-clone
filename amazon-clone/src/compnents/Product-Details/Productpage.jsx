import React from 'react'
import "./Productpage.css"
import { useStateValue } from '../StateProvider/StateProvider';
import { MdLocalOffer } from "react-icons/md";
import {GiDeliveryDrone,GiTakeMyMoney} from "react-icons/gi"
import {AiFillCreditCard} from "react-icons/ai"
function Productpage(props) {
    const[state,dispatch]=useStateValue();
    const addToBasket=()=>{
        //dispatch the item into to data layer
        console.log(state.user);
        // setIsAdding(true)
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
  return (
    <div className='container'>
    <div className='product_img'> 
    <img src={props.image} alt="" />
    </div>
        <div className='product__info'> 
                    <p>{props.title}</p>
                    <span className='product__rating' >{Array(props.rating).fill().map((_,i)=>(
                            <p>⭐</p>
                        ))}</span>
                    <hr/>
                    
                    <span className='product__price'>${props.price}</span>
                    <br />
                    <span style={{color:'grey',fontSize:'10px'}}>M.R.P:</span><span className='product__dprice'>${props.price+Math.floor((Math.random() * 5) + 1)}</span>
                    <br/>
                    <br />
                    <p style={{fontFamily:'sans-serif'}}>Inclusive of all taxes</p>
                    <p><strong>EMI</strong> starts at $1.199. No Cost EMI available</p>
                    <h4 style={{marginTop:'10px'}}>Delibery Options</h4>
                    <GiDeliveryDrone size="3rem" style={{marginTop:"5px",color:"#414141"}} title="Drone Delivery"/>
                    <GiTakeMyMoney size="3rem" style={{marginLeft:"15px",color:"#414141"}} title="Cash On Delivery"/>
                    <AiFillCreditCard size="3rem" style={{marginLeft:"15px",color:"#414141"}} title="Online payment"/>
                    <hr />


                    <div className='product__offers'>
                    <h3 style={{marginTop:"10px"}}>Availabe Offers</h3>
                    <div>
                    <MdLocalOffer size="1em" style={{marginTop:"5px",color:"#00ADB5"}}/>
                    <span>Bank Offer5% Cashback on Flipkart Axis Bank Card</span>
                    </div>
                    <div>
                    <MdLocalOffer size="1em" style={{marginTop:"5px",color:"#00ADB5"}}/>
                    <span>Special PriceGet extra 15% off (price inclusive of cashback/coupon)</span>
                    </div>
                    <div>
                    <MdLocalOffer size="1em" style={{marginTop:"5px",color:"#00ADB5"} }/>
                    <span>7.5% Instant Discount up to INR 1500 on IndusInd Credit Card EMI Trxn. Minimum purchase value INR 12000</span>
                    </div>
        </div>
        <button onClick={addToBasket} className="addbasket_button"> Add to Basket</button>
    </div>
    </div>
  )
}

export default Productpage