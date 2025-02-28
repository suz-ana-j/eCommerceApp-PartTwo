import React from "react";
import { useCart } from "../CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // Ensure you set this in your .env file

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      return;
    }

    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: cartItems.reduce((total, item) => total + item.price, 0) * 100, // Convert to cents
        token: paymentMethod.id,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Payment Successful!");
    } else {
      alert("Payment Failed: " + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Elements stripe={stripePromise}>
      <div>
        <h2>Checkout</h2>
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} />
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
        {/* Add the Stripe payment form */}
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Checkout;

