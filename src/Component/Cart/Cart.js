import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // let productsName = 0;
    // for (const product of cart) {
    //     productsName = productsName + product.name;
    // }
    return (
        <div>
            <h3>Order Summary </h3>
            <p><b>Selected Products</b></p>
            <p><b>{cart}</b></p>

        </div>
    );
};

export default Cart;