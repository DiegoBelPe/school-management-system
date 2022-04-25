import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KsUIaBULQhuEZz1PVPpwq9jmGIedKsRxQmy2LjCSU991vNgJ24CzxQHu8WtLdMbnbXNeYhfx0pk8fYgU9SdJTnY009RQ9ENBh');

function Payments() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payments;
