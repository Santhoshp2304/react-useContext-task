import React from 'react';
import { CartProvider } from './context/cartContext';
import Cart from './Cart';
function App() {

  return (
    <CartProvider>
      <Cart/>
    </CartProvider>
  )
}

export default App
