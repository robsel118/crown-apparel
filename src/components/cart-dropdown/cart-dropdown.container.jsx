import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEM = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => (
  <Query query={GET_CART_ITEM}>
    {({ data: { cartItems } }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {toggleCartHidden => (
          <CartDropdown
            toggleCartHidden={toggleCartHidden}
            cartItems={cartItems}
          />
        )}
      </Mutation>
    )}
  </Query>
);

export default CartDropdownContainer;
