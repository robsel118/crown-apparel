import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from '../../data/shop.data';
import { PageHeader } from 'antd';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        <PageHeader title="Shop Page"></PageHeader>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
