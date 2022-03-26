import React from 'react';
import './Cart.css'

const Cart = ({ product }) => {
    return (
        <div>
            <p><b>{product}</b></p>
        </div>
    );
};

export default Cart;