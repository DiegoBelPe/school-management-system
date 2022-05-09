import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import style from './Checkout.module.css';

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
    document.querySelector('form').reset();
  };

  return (
    <form className={style.form__container} onSubmit={handleSubmit}>
      <h2 className="payment-form__title">Información de pago</h2>
      <label className={style.label__pagos} htmlFor="name">
        Nombres
        <input className={style.input__pagos} id="name" type="text" name="name" />
      </label>
      <label className={style.label__pagos} htmlFor="email">
        Correo
        <input className={style.input__pagos} type="text" name="lastname" />
      </label>

      <label className={style.label__pagos} htmlFor="text">
        Valor a Pagar
        <input className={style.input__pagos} type="text" name="amount" />
      </label>
      <h3 className={style.title__datos__tarjeta}>Datos de la tarjeta</h3>
      <CardElement />
      <br />
      <button className={style.button__stripe} type="submit">Pagar</button>
    </form>
  );
}

export default CheckoutForm;
