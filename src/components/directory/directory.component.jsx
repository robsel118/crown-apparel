import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import './directory.styles.sass';

const Directory = ({ categories }) => (
  <div className="directory-menu">
    <div className="directory-small">
      {categories
        .filter(item => item.size === undefined)
        .map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps}></MenuItem>
        ))}
    </div>
    <div className="directory-large">
      {categories
        .filter(item => item.size)
        .map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps}></MenuItem>
        ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  categories: selectDirectorySection(state)
});

export default connect(mapStateToProps)(Directory);
