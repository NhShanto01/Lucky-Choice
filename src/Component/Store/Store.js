import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    const handleSelectedProducts = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='store-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleSelectedProducts={handleSelectedProducts}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>Selected Products </h3><br />
                <p>{cart}</p>
            </div>
        </div>
    );
};

export default Store;