import React from 'react'
import Product from '../Product-Components/Product';
import './Home.css' 
// import DispalyProducts from './Display-products/DispalyProducts';
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img
         alt=""
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />   */}
      {/* <div className='product_banner'>
            <div className="product_col1">
                  <img  className='product_image' src="https://www.pngitem.com/pimgs/m/1-12280_amazon-echo-logo-png-transparent-png.png" alt="echo" />
                  <div className='product_row1'>
                        <img  className='product_imagerow1' src="https://www.pngitem.com/pimgs/m/1-12280_amazon-echo-logo-png-transparent-png.png" alt="echo" />
                        <img  className='product_imagerow1' src="https://www.pngitem.com/pimgs/m/1-12280_amazon-echo-logo-png-transparent-png.png" alt="echo" />
                    </div>
            </div>
            <div className="product_col2">
                  <img  className='product_image' src="https://pbs.twimg.com/profile_images/1599829788369113089/FrdYoQ1o_400x400.jpg" alt="aws" />
                  <div className='product_row2'>
                        <img  className='product_imagerow2' src="https://pbs.twimg.com/profile_images/1599829788369113089/FrdYoQ1o_400x400.jpg" alt="aws" />
                        <img  className='product_imagerow2' src="https://pbs.twimg.com/profile_images/1599829788369113089/FrdYoQ1o_400x400.jpg" alt="aws" />
                  </div>
            </div>
            
      </div> */}
      <div className="product_banner">
      <div className=' card banner1'>
      {/* <img  className='product_image' src="https://www.pngitem.com/pimgs/m/1-12280_amazon-echo-logo-png-transparent-png.png" alt="echo" /> */}
      </div>
      <div className=' card banner2'></div>
      <div className=' card banner3'></div>
      <div className=' card banner4'></div>
      <div className=' card banner5'></div>
      <div className=' card banner6'></div>
      {/* <img  className='product_imagerow1' src="https://www.pngitem.com/pimgs/m/1-12280_amazon-echo-logo-png-transparent-png.png" alt="echo" /> */}
      </div>
      <div  className='home_row'>
            <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price={19.99} 
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
            <Product 
            id="12321343"
            title="Eureka Forbes Quick Clean DX Vacuum Cleaner with 1200 Watts Powerful Suction Control"
            price={39.93} 
            rating={5}
            image="https://m.media-amazon.com/images/I/71JS5wMHfnL._AC_UL480_FMwebp_QL65_.jpg"/>
          <Product
                  id="49538094"
                  title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                  price={239.0}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
      {/* product */}
       </div>
      <div className='home_row'>
          <Product 
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product 
            id="12321343"
            title="Apple iPhone 14 Pro Max 128GB Space Black" 
            price={1609.30} 
            rating={5}
            image="https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg"/>
          </div>
      <div className='home_row'> 
            <Product
                  id="90829332"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={1094.98}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
              <Product
                  id="90829334"
                  title="LG 86cm Ultra Wide Curved Gaming LCD Monitor 160Hz 1ms -QHD (2K 3440 x 1440 Pixels) sRGB HDR 10 Color Calibrated LC49RG90SSUXEN 49' "
                  price={1094.98}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61Y0JHgpWJL._AC_UY327_FMwebp_QL65_.jpg"
                />
      </div>
      </div>
    </div>
    );
}

export default Home