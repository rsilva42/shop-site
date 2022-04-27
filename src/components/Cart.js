import React, { useEffect } from 'react';
import '../styles/cart-page.css';

export default function Cart({cart, setCart}) {

  // todo:
  // checkout button to clear cart and send to thank you page
  // remove item feature

  const combineItems = (items) => {
    return JSON.parse(JSON.stringify(items.reduce((newItems, item) => {
      let newItem = newItems.find(newItem => newItem.item.id === item.item.id && newItem.size === item.size);
      
      if (newItem) {
        newItem.quantity += item.quantity;
      }

      return newItem ? newItems : newItems.concat(item);
    }, [])));
  };

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
            {cart.map((cartItem, index) => {
            return <tr key={index} className='cart-item'>
              <td>{cartItem.item.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</td>
              <td>{cartItem.size.replace(/^\w/, (c) => c.toUpperCase())}</td>
              <td>{cartItem.quantity}</td>
              <td>${cartItem.item.price * cartItem.quantity} ({cartItem.quantity} X ${cartItem.item.price})</td>
            </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}
