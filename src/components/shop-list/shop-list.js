import React from 'react';
import ShopListItem from '../shop-list-item';

const ShopList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <ShopListItem />
      </li>
    </ul>
  );
};

export default ShopList;
