import React from 'react';
import ShopList from '../shop-list';

import './homePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Товары магазина</h2>
      <ShopList />
    </div>
  );
};

export default HomePage;
