import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div className='store-container'>
            <div className="products-container">
                <p>hello products</p>
                {
                    products.map(product => <Product
                        key={product.id}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <p>hello cart</p>
                {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    );
};

export default Store;