import React from 'react';
import logo from '../../logo/favicon.ico';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <h1>Lucky Store</h1>
            <div>
                <a href="/products">Products</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;