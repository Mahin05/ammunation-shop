import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        // fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div>
             {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
        </div>
    );
};

export default Shop;