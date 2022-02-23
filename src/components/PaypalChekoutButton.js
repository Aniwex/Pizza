import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (order) => {
    setPaidFor(true);
  };
  const { totalPrice } = useSelector(({ cart }) => cart);
  console.log(totalPrice);
  if (error) {
    alert(error);
  }
  return (
    <PayPalButtons
      style={{
        color: 'gold',
        shape: 'pill',
        label: 'pay',
        layout: 'horizontal',
        size: 'responsive',
        
      }}
      
      onClick={(data, actions) => {
        const hasAlready = false;
        if (hasAlready) {
          setError('Вы уже купили');
          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
