import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";

import CheckoutPage from "./checkout.component";

const GET_CART_INFO = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => {
  return <CheckoutPage cartItems={cartItems} total={cartTotal} />;
};

export default flowRight(graphql(GET_CART_INFO))(CheckoutPageContainer);
