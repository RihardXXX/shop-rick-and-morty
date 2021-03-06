import React, { Fragment } from 'react';

import './shop-list-item.css';

const ShopListItem = ({ book, addToProduct }) => {
  return (
    <Fragment>
      <img src={book.image} className="item-image" alt="text book" />
      <span>
        <b>{book.name}</b>
      </span>
      <button type="button" className="btn btn-success" onClick={addToProduct}>
        добавить в корзину
      </button>
      <span>${book.price}</span>
    </Fragment>
  );
};

export default ShopListItem;
