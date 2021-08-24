import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Рик и Морти
          </Link>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/homepage">
                  товары
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cartpage">
                  корзина покупок
                </Link>
              </li>
            </ul>
            <div className="cart">
              <i class="fas fa-shopping-cart fa-2x"></i>
              <br />
              <span>товаров: </span>
              <br />
              <span>цена: </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
