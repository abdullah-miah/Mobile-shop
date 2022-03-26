import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img, price}=props.cart;
    // const random=Math.floor(Math.random(id)*4)+1;
    // if(random){
    //     console.log(props.cart);
    // }
    return (
        <div className='order-summary' >
               <img src={img} alt="" />
           <div className="name">
               <p>{name}</p>
           </div>
           <div className="price">
              <p> {price} BDT</p>
           </div>
           <button className='btn-close'>Close</button>
           <div>
           </div>
        </div>
    );
};

export default Cart;