import React, { useEffect } from 'react';
import ShopListItem from '../shop-list-item';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { loadBooks } from '../../actions';
import { getAllBooks } from '../../services';
import Spinner from '../spinner';

// Эта компонента просто запускает отрисовку
const ShopList = ({ books }) => {
  return (
    <ul className="list-group">
      {books.map((book) => {
        return (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-around align-items-center"
          >
            <ShopListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

// Контейнер компонент который получает сосотояние и экшен и в хуке моунт запускает фетч
const ShopListContainer = ({ loadBooks, books, isLoading, error }) => {
  useEffect(() => {
    loadBooks();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  return <ShopList books={books} />;
};

// импортируем состояние из редакса и кладем для реакт компонента
const mapStateToProps = ({ books, isLoading, error }) => ({
  books,
  isLoading,
  error,
});

// импортировали экшен из редакса и готовим для компонента реакта
const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: loadBooks(getAllBooks, dispatch),
  };
};

// Эта штука коннектить редакс и компонент реакт
export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
