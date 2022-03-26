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
    // console.log(newCart);
    }
    const clear = ()=>{
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
                <p className='first-p'>Choose Four Weapons!!</p>
                <h3>Chosen Weapons :</h3>
                <div className='weapons'>
                {
                    cart.map((item,id)=>(
                        <p key={id}
                        >{item.name}
                        </p>
                    ))
                }
                </div>
                <button className='btn-style' onClick={clear}>Clear Choices</button><br />
                <button className='btn-style2' onClick={choseOne}>Chose One</button><br />
                {
                    <p className='second-p'>Chosen one Weapon : {chosen.name}</p>
                }
                </div>
            </div>
        </div>
    );
};

export default Shop;