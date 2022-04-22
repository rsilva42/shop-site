import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar(props) {
  const refCartString = useRef(props.cart.length > 0 ? `Cart (${props.cart.length})` : "Cart");
  
  // this updates the cart string, disabled for now
  // may need this instead of setting the string in initial state
  //
  // initial state works right now because navbar is reset
  // when changes are made
  // useEffect(() => {
  //   console.log(props);
  //   if (props.cart.length > 0) {
  //     refCartString.current = `Cart (${props.cart.length})`;
  //   } else {
  //     refCartString.current = "Cart";
  //   }
  // });

  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="contact">Contact</Link>
      <Link to="cart">{refCartString.current}</Link>
    </nav>
  );
}
