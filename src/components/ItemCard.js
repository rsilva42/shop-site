import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/item-card.css';

export default function ItemCard(props) {
  return (
    <Link  to={`/shop/${props.item.id}`} className='item-card'>
        <img src={props.item.image} alt={props.item.name} />
        <div className='item-card-label'>
            <p>{props.item.name}</p>
            <p>${props.item.price}</p>
        </div>
    </Link>
  )
}
