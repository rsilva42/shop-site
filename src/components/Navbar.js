import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="contact">Contact</Link>
      <Link to="cart">{props.cart.length > 0 ? `Cart (${props.cart.length})` : "Cart"}</Link>
    </nav>
  );
}
