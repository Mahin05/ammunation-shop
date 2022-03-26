import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    const addToProductHandler = (product)=>{
        const newCart = [...cart,product];
    if(newCart.length<=4){
        setCart(newCart)
    }
    console.log(newCart);
    }
    const clear = ()=>{
        const emptyCart = [];
        setCart(emptyCart);
    }
    useEffect(()=>{
        // fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToProductHandler={addToProductHandler}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
            <h1>Chosen Items</h1>
                <div className='cartt'>
                {
                    cart.map((item,id)=>(
                        <p key={id}
                        >{item.name}</p>
                    ))
                }
                </div>
                <button onClick={clear}>clear all</button>
            </div>
        </div>
    );
};

export default Shop;