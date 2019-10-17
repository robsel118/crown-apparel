import React from 'react';

import { connect } from 'react-redux';
import {
  removeFromCart,
  addToCart,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.sass';

const CheckoutItem = ({ item, clearItem, addToCart, removeItem }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price} </span>
      <span className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeFromCart(item)),
  addToCart: item => dispatch(addToCart(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
