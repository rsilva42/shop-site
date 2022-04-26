import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/item-page.css';
import ItemAdder from './ItemAdder';

export default function ItemPage(props) {
  const params = useParams();

  let item = props.items.find((i) => i.id === +params.itemId);

  if (!item) item = { id: 0, name: "", image: "", price: 0, categories: []};

  return (
    <div className='item-page'>
      <img src={item.image} alt={item.name}/>
      <div className='item-info'>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <ItemAdder id={+params.itemId} cart={props.cart} setCart={props.setCart}/>
      </div>
    </div>
  );
}
