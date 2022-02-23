import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import Checkout from './components/Checkout';
import { Home, Cart } from './pages';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <PayPalScriptProvider
          options={{
            'client-id':
              'AcaTr8-73Jzu7L4XYb9lOJzxIGtqwgQLeSPc1Irb9SeQm-0FtsR5BzWcUTXvgokTf37xom7e8ZEqJWa8',
            currency: 'RUB',
          }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/pay" element={<Checkout />} exact />
          </Routes>
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default App;
