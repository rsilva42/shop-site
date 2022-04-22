import React from 'react';
import ItemCard from './ItemCard';
import '../styles/shop.css';

export default function Shop(props) {
  return (
    <div className='shop'>
        <h1>Shop</h1>
        <div className='shop-content'>
          {props.items.map((item, index) => <ItemCard key={index} item={item} />)}
        </div>
    </div>
  )
}
