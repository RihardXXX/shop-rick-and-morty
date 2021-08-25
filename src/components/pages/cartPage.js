import React from 'react';

import './cartPage.css';

const CartPage = () => {
  return (
    <div className="order">
      <h2>Ваши покупки</h2>
      <table className="table table-hover">
        <thead>
          <tr className="table-active">
            <th scope="col">#</th>
            <th scope="col">наименование</th>
            <th scope="col">количество</th>
            <th scope="col">цена</th>
            <th scope="col">действия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Рик и Морти</td>
            <td>2</td>
            <td>$66</td>
            <td className="d-flex d-flex justify-content-around align-items-center">
              <button type="button" className="btn btn-outline-warning">
                -
              </button>
              <button type="button" className="btn btn-outline-success">
                +
              </button>
              <button type="button" className="btn btn-outline-danger">
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
