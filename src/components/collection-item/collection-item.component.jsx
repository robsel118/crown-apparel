import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import { addToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const { Meta } = Card;
const CollectionItem = ({ item, addToCart }) => (
  <Card
    key={item.id}
    hoverable
    style={{
      width: '300px'
    }}
    cover={
      <div>
        <Tooltip placement="top" title="Add to Cart">
          <Button
            onClick={() => addToCart(item)}
            className="add-to-cart-action"
            type="primary"
            icon="shopping-cart"
            size="default"
          />
        </Tooltip>
        <img
          style={{
            height: '350px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
          alt={item.name}
          src={item.imageUrl}
        />
      </div>
    }
  >
    <Meta title={item.name} description={`${item.price}$`} />
  </Card>
);
const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
