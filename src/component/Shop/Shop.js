import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct]=useState([]);
    useEffect(()=>{
        fetch('mobile.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }
        ,[]);
    return (
        <div className='shop-container'>
            <div className="product-container">
              
              {
                  product.map(product =><Product
                  product={product}
                  key ={product.id}
                  
                  ></Product> )
              }

            </div>
            <div className="cart-container">
                    <h1> Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;