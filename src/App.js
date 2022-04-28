import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ItemPage from './components/ItemPage';
import Checkout from './components/Checkout';

const ITEM_STORAGE_KEY = "testItems.json";
const CART_STORAGE = "cart.roy";


export default function Router() {
  const [cart, setCart] = useState([]);
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem(ITEM_STORAGE_KEY));
    setItemsData(parsedItems);

    const parsedCart = JSON.parse(localStorage.getItem(CART_STORAGE));
    setCart(parsedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE, JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={itemsData} />} />
        <Route path="/shop/:itemId" element={<ItemPage items={itemsData} cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
