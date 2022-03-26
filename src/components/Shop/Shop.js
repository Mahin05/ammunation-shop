import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import '../Cart/Cart.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    const [chosen,setChosen]=useState([])
    const addToProductHandler = (product)=>{
        const newCart = [...cart,product];
    if(newCart.length<=4){
        setCart(newCart)
    }
    console.log(newCart);
    }
    const clear = (product)=>{
        const emptyCart = [];
        setCart(emptyCart);
    }
    const choseOne = ()=>{
        const index = Math.floor(Math.random()*cart.length);
        const item = cart[index];
        setChosen(item);
        // return item;
        // console.log(item.name);
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
                <div className='cart'>
                {
                    cart.map((item,id)=>(
                        <p key={id}
                        >{item.name}
                        </p>
                    ))
                }
                </div>
                <button onClick={clear}>clear all</button><br />
                <button onClick={choseOne}>Chose One</button><br />
                {
                    <p>Chosen Item Name: {chosen.name}</p>
                }
            </div>
        </div>
    );
};

export default Shop;