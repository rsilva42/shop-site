import React, { useRef } from 'react';
import '../styles/item-adder.css';

export default function ItemAdder(props) {
  let size = useRef(null);
  let quantity = useRef(0);

  const addToCart = () => {
    props.setCart(prevCart => prevCart.concat({item: props.item, size: size.current.value, quantity: +quantity.current.value}));
  }

  return (
    <div className='item-adder'>
      <select ref={size} defaultValue='medium'>
        <option value='extra-small'>Extra Small</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
        <option value='extra-large'>Extra Large</option>
      </select>
      <input type='number' ref={quantity} min='1' max='999' defaultValue='1' />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
