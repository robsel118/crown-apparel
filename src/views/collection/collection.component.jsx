import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.sass';

const CollectionPage = ({ collection }) => (
  <div>
    <h2>COLLECTION</h2>
    <div className="collection-grid">
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.category)(state)
});
export default connect(mapStateToProps)(CollectionPage);
