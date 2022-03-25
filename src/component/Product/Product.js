import React from 'react';
import './Porduct.css'

const Product = ({product}) => {
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
            <button className='btn'> Add To Cart</button>
        </div>
    );
};

export default Product;