import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <h1>Fortunate Store</h1>
            <div>
                <a href="/products">Products</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;