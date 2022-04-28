import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cart-page.css';
import CartItem from './CartItem';

export default function Cart({cart, setCart}) {
  let navigate = useNavigate();

  const combineItems = (items) => {
    return JSON.parse(JSON.stringify(items.reduce((newItems, item) => {
      let newItem = newItems.find(newItem => newItem.item.id === item.item.id && newItem.size === item.size);

      if (newItem) {
        newItem.quantity += item.quantity;
      }

      return newItem ? newItems : newItems.concat(item);
    }, [])));
  };

  const checkout = () => {
    setCart([]);
    navigate('/checkout');
  }

  useEffect(() => {
    setCart(previousCart => combineItems(previousCart));
  }, [setCart]);

  return (
    <div className='cart-page'>
        <h1>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => <CartItem key={index} cart={cart} setCart={setCart} cartItem={cartItem} />)}
          </tbody>
        </table>
        <button onClick={checkout}>Checkout</button>
    </div>
  )
}
