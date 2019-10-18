import React from 'react';
import Directory from '../../components/directory/directory.component';
import { PageHeader } from 'antd';

import './homepage.style.sass';

const HomePage = () => (
  <div className="homepage">
    <PageHeader title="Home Page" />
    <Directory />
  </div>
);

export default HomePage;
