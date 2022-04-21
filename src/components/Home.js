import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className='home'>
        <h1>Roy's Rare Wares</h1>
        <p>Welcome to Roy's Rare Wares! Established in 2022, we are the premium option for clothes.
          Our lead designer, Rodrigo "Roy" Silva, has been wearing clothes all his life. He now raises questions about how we can redefine garments that have withstood millennia.</p>
          <Link to="shop">Continue to our shop.</Link>
    </div>
  )
}
