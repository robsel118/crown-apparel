import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Badge } from 'antd';
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.sass';

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <Badge count={itemCount} offset={[-10, 10]}>
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
    </div>
  </Badge>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
