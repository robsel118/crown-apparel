import React from 'react';
import { Button, Empty } from 'antd';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './cart-dropdown.styles.sass';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <Empty description="Empty Cart" />
      )}
    </div>
    <Button
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartVisibility());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
