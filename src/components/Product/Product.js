import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product,addToProductHandler}) => {
    const {img,name,price} = product;
    
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        </div>
        <button onClick={()=>addToProductHandler(product)} className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;