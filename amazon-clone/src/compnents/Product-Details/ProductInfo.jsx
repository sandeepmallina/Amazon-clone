import React, { useContext } from 'react'
import Product from '../Product-Components/Product';
import Productpage from './Productpage';
function ProductInfo() {
  // const myUsercontext=useContext(UserContext);
  const details=JSON.parse(localStorage.getItem("pbasket"));
  return (
    <div>
    <h1>Product Page</h1>
    <br />
    <Productpage
              id=   {details[0]. id}
              title={details[0].title}
              image={details[0].image}
              price={details[0].price}
              rating={details[0].rating}
            />

    </div>
  )
}

export default ProductInfo