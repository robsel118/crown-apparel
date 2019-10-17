import React from 'react';
import { Button } from 'antd';

import './cart-dropdown.styles.sass';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
