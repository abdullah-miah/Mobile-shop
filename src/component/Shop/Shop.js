import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct]=useState([]);
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('mobile.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }
        ,[]);
        const handleAddToCart =(product)=>{
         
            const newCart = [...cart, product];
            setCart(newCart);
         };
    return (
        <div className='shop-container'>
            <div className="product-container">
              
              {
                  product.map(product =><Product
                  product={product}
                  key ={product.id}
                  handleAddToCart={handleAddToCart}
                  
                  ></Product> )
              }

            </div>
            <div className="cart-container">
                    <div className="cart-item">
                    <h1> Order summary</h1>
                    {
                        cart.map(cart=> <Cart
                        cart ={cart}
                        key={cart.id}
                        ></Cart>)
                    }
                    </div>
            </div>
        </div>
    );
};

export default Shop;