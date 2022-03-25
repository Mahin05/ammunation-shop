import React from 'react';

const Product = ({product}) => {
    const {img,name,price,seller,ratings} = product;
    return (
        <div>
             <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Product;