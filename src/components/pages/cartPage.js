import React from 'react';
import { connect } from 'react-redux';
import {
  deleteProduct,
  incrementProduct,
  decrementProduct,
} from '../../actions';

import './cartPage.css';

const CartPage = ({ items, totals, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="order">
      <h2>Ваши покупки</h2>
      <table className="table table-hover">
        <thead>
          <tr className="table-active">
            <th scope="col">#</th>
            <th scope="col">наименование</th>
            <th scope="col">количество</th>
            <th scope="col">общая цена</th>
            <th scope="col">действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            const { id, name, count, total, image } = item;
            return (
              <tr key={id}>
                <th scope="row">{idx + 1}</th>
                <td>
                  <span className="label-item">
                    <img src={image} />
                  </span>
                  {name}
                </td>
                <td>{count}</td>
                <td>${total}</td>
                <td className="d-flex d-flex justify-content-around align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => onDecrement(id)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => onIncrement(id)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span className="badge bg-info">общая сумма: {totals}$</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, totalOrders } }) => {
  return {
    items: cartItems,
    totals: totalOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (id) => dispatch(incrementProduct(id)),
    onDecrement: (id) => dispatch(decrementProduct(id)),
    onDelete: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
