import React, { Fragment } from 'react';

import './shop-list-item.css';

const ShopListItem = () => {
  return (
    <Fragment>
      <img
        src="https://cdn.pixabay.com/photo/2021/08/16/09/21/seagulls-6549872_960_720.jpg"
        className="item-image"
      />
      <span>name</span>
      <span>species</span>
    </Fragment>
  );
};

export default ShopListItem;
