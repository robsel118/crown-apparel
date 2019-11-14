import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    cartItemsCount @client
  }
`;
const CartIconContainer = ({ data: { cartItemsCount }, toggleCartHidden }) => {
  return (
    <CartIcon itemCount={cartItemsCount} toggleCartHidden={toggleCartHidden} />
  );
};
export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
