import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ItemPage from './components/ItemPage';

const LOCAL_STORAGE_KEY = "testItems.json";


export default function Router() {
  const [cart, setCart] = useState([]);
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setItemsData(parsedItems);
  }, []);

  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={itemsData} />} />
        <Route path="/shop/:itemId" element={<ItemPage items={itemsData} cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}
