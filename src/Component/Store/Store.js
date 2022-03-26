import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        if ((cart.length < 4)) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const removeItem = () => {
        setCart([])
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
                <h2>Selected Products</h2>
                {
                    cart.map(product => <Cart
                        // key={product.id}
                        product={product}
                        removeItem={removeItem}
                    // cart={cart}
                    ></Cart>)
                }
                <button className='remove-btn' onClick={() => removeItem()}>Refresh</button>
            </div>
        </div>
    );
};

export default Store;