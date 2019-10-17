import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.actions';
import './collection-preview.styles.sass';

const { Meta } = Card;

const CollectionPreview = ({ title, items, addToCart }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
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
        ))}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionPreview);
