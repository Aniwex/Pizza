import PaypalCheckoutButton from './PaypalChekoutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
function Checkout() {
  const { totalPrice } = useSelector(({ cart }) => cart);
  const product = {
    description: 'Test',
    price: totalPrice
  };
  return (
    <div>
        <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
        </div>
        <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
        </Link>
        
    </div>
  );
}

export default Checkout;
