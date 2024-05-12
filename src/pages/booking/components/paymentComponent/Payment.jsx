import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (payload.error) {
      setError(payload.error);
      setLoading(false);
    } else {
      // Send the payment method to your server to process the payment
      // You can also pass along the booking information to your server
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: payload.paymentMethod.id,
          // bookingId: 'your-booking-id',
          // amount: 'your-booking-amount',
        }),
      });

      if (response.error) {
        setError(response.error);
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
        // Show a success message or redirect to a success page
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={loading}>
        Pay ${/* your booking amount */}
      </button>
    </form>
  );
};

export default Payment;