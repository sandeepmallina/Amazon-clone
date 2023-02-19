import React,{useContext} from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import Subtotal from '../Subtotal-Compnents/Subtotal'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useUserStateValue } from '../SimpleStateProvider/UnameProvider'

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
const {userName} =useUserStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
             alt=''/>
             <diV>
             <h3> Hello,{user? userName : 'Guest'}</h3>
            <h2 className='checkout_title'>
                Your shopping basket
            </h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
            
        </diV>
        </div>
        
        <div className='checkout_left'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout