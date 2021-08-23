import React, { Fragment } from 'react';
import ShopList from '../shop-list';

const HomePage = () => {
  return (
    <Fragment>
      <h2>Тут вы можете купить товары для героев магазина</h2>
      <ShopList />
    </Fragment>
  );
};

export default HomePage;
