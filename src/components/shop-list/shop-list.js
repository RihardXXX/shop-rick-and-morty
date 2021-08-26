import React, { useEffect } from 'react';
import ShopListItem from '../shop-list-item';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { booksLoaded, booksLoading, booksError } from '../../actions';
import { getAllBooks } from '../../services';
import Spinner from '../spinner';

const ShopList = ({ loadBooks, books, isLoading, error }) => {
  useEffect(() => {
    loadBooks();
  }, []);

  const renderItem = books.map((book) => {
    return (
      <li
        key={book.id}
        className="list-group-item d-flex justify-content-around align-items-center"
      >
        <ShopListItem book={book} />
      </li>
    );
  });

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  return <ul className="list-group">{renderItem}</ul>;
};

const mapStateToProps = ({ books, isLoading, error }) => ({
  books,
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => {
      dispatch(booksLoading());
      getAllBooks()
        .then((books) => dispatch(booksLoaded(books)))
        .catch((error) => dispatch(booksError(error)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
