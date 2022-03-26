import React from 'react';
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
            <button onClick={() => handleAddToCart(product)} className='btn'> Add To Cart</button>
        </div>
    );
};

export default Product;