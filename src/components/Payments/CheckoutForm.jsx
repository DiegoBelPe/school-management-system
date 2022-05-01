import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Payment Metodo creado!', paymentMethod);

      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          amount: 10_000,
        }),
      };
      console.log('Payload:', payload);

      const response = await fetch('http://localhost:8080/api/checkout', payload);
      const body = await response.json();
      console.log('Respuesta del servidor:', body);
      elements.getElement(CardElement).clear();
    } else {
      console.log('Payment Metodo Error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckoutForm;
