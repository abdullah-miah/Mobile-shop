import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, img, price}= cart;
    // let name ;
    // for(const product of cart){
        
    // }
    return (
        <div className='order-summary' >
               <img src={img} alt="" />
           <div className="name">
               <p>{name}</p>
           </div>
           <div className="price">
              <p> {price}</p>
           </div>
           <button>Close</button>
        </div>
    );
};

export default Cart;