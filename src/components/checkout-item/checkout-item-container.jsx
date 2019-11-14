import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";

import CheckoutItem from "./checkout-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = ({
  addItem,
  removeItem,
  clearItem,
  ...otherProps
}) => {
  return (
    <CheckoutItem
      removeItem={item => removeItem({ variables: { item } })}
      addItem={item => addItem({ variables: { item } })}
      clearItem={item => clearItem({ variables: { item } })}
      {...otherProps}
    />
  );
};

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: "addItem" }),
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItem" }),
  graphql(CLEAR_ITEM_FROM_CART, { name: "clearItem" })
)(CheckoutItemContainer);
