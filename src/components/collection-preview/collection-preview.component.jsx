import React from 'react';
import './collection-preview.styles.sass';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;