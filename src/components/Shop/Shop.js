import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

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
                <div className='cart'>
                <p>Choose 4 Products!!</p>
                <h3>Chosen Products :</h3>
                {
                    cart.map((item,id)=>(
                        <p key={id}
                        >{item.name}
                        </p>
                    ))
                }
                <button className='btn-style' onClick={clear}>clear all</button><br />
                <button className='btn-style2' onClick={choseOne}>Chose One</button><br />
                {
                    <p>Chosen Item Name: {chosen.name}</p>
                }
                </div>
            </div>
        </div>
    );
};

export default Shop;