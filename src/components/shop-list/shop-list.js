import React, { useEffect } from 'react';
import ShopListItem from '../shop-list-item';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { loadBooks, addToProduct } from '../../actions';
import { getAllBooks } from '../../services';
import Spinner from '../spinner';

// Эта компонента просто запускает отрисовку
const ShopList = ({ books, addToProduct }) => {
  return (
    <ul className="list-group">
      {books.map((book) => {
        return (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-around align-items-center"
          >
            <ShopListItem
              book={book}
              addToProduct={() => addToProduct(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

// Контейнер компонент который получает сосотояние и экшен и в хуке моунт запускает фетч
const ShopListContainer = ({
  loadBooks,
  addToProduct,
  books,
  isLoading,
  error,
}) => {
  useEffect(() => {
    loadBooks();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  return <ShopList books={books} addToProduct={addToProduct} />;
};

// импортируем состояние из редакса и кладем для реакт компонента
const mapStateToProps = ({ bookList: { books, isLoading, error } }) => ({
  books,
  isLoading,
  error,
});

// импортировали экшен из редакса и готовим для компонента реакта
const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: loadBooks(getAllBooks, dispatch),
    addToProduct: (id) => dispatch(addToProduct(id)),
  };
};

// Эта штука коннектить редакс и компонент реакт
export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
