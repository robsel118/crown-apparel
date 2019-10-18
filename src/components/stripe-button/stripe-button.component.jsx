import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Apparel Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey="pk_test_aF6HwE2Fa7L91aeo8gn89Th200qiauD8hD"
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
