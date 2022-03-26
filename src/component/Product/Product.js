import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Porduct.css'

const Product = ({product, handleAddToCart}) => {
    const{img,name,brand,price,ratings  }=product;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>Name: {name}</h4>
                <p> Brand: {brand} </p>
                <p> Price: {price} BDT</p>
                <p> Ratings: {ratings} Rating</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn'>
                <p>Add To Cart</p>
               < FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;