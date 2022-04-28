import React, { useState } from 'react'

export default function CartItem({ setCart, cartItem }) {
  const [isEditable, setIsEditable] = useState(false);


  const toggleEdit = () => setIsEditable(!isEditable);

  const editSize = (change) => {
    setCart((prevCart) => {
      let newCart = JSON.parse(JSON.stringify(prevCart));
      newCart.find(newItem => newItem.item.id === cartItem.item.id && newItem.size === cartItem.size)
        .size = change.target.value;
      return newCart;
    });
  };

  const editQuantity = (change) => {
    setCart((prevCart) => {
      let newCart = JSON.parse(JSON.stringify(prevCart));
      if (+change.target.value !== 0) {
        newCart.find(newItem => newItem.item.id === cartItem.item.id && newItem.size === cartItem.size)
          .quantity = +change.target.value;
      }

      if (+change.target.value === 0 && window.confirm(`Remove ${cartItem.item.name} from cart?`)) {
        setIsEditable(false);
        return newCart.filter(newItem => newItem.item.id !== cartItem.item.id || newItem.size !== cartItem.size)
      } else {
        change.target.value = newCart.find(newItem => newItem.item.id === cartItem.item.id && newItem.size === cartItem.size).quantity
      }
      return newCart;
    });
  }

  return <tr className='cart-item'>
    <td>{cartItem.item.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</td>
    {isEditable ? <td>
      <select defaultValue={cartItem.size} onChange={editSize}>
        <option value='extra-small'>Extra Small</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
        <option value='extra-large'>Extra Large</option>
      </select>
    </td> : <td>{cartItem.size.replace(/^\w/, (c) => c.toUpperCase())}</td>}
    {isEditable ? <td>
        <input type='number' min='0' max='999' defaultValue={cartItem.quantity} onChange={editQuantity} />
    </td> : <td>{cartItem.quantity}</td>}
    <td>${cartItem.item.price * cartItem.quantity} ({cartItem.quantity} X ${cartItem.item.price})</td>
    <td><button onClick={toggleEdit}>edit</button></td>
  </tr>
}
