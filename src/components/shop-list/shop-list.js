import React, { useEffect } from 'react';
import ShopListItem from '../shop-list-item';
import { connect } from 'react-redux';
import { booksLoaded, booksLoading } from '../../actions';
import { getAllBooks } from '../../services';
import Spinner from '../spinner';

const ShopList = ({ books, booksLoaded, booksLoading, isLoading }) => {
  const loadBooks = () => {
    booksLoading();
    getAllBooks().then((books) => booksLoaded(books));
  };

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

  return <ul className="list-group">{renderItem}</ul>;
};

const mapStateToProps = ({ books, isLoading }) => ({ books, isLoading });

const mapDispatchToProps = {
  booksLoaded,
  booksLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
