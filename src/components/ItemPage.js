import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/item-page.css';

export default function ItemPage(props) {
  const params = useParams();

  // figure out why props are not read from storage on refresh
  // may need to useEffect or some hook to have it pull state info properly
  const item = props.items.find((i) => i.id == +params.itemId);

  return (
    <div className='item-page'>
      <img src={item.image}/>
      <div>
        <h1>{item.name}</h1>
      </div>
    </div>
  );
}
