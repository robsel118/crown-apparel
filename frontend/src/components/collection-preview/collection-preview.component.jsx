import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import './collection-preview.styles.sass';

const { Meta } = Card;

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <Card
            key={id}
            hoverable
            style={{
              width: '100%'
            }}
            cover={
              <div>
                <Tooltip placement="top" title="Add to Cart">
                  <Button
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
                    'background-size': 'contain',
                    'background-position': 'center'
                  }}
                  alt={name}
                  src={imageUrl}
                />
              </div>
            }
          >
            <Meta title={name} description={`${price}$`} />
          </Card>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
