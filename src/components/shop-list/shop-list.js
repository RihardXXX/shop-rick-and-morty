import React, { useEffect } from 'react';
import ShopListItem from '../shop-list-item';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import { getAllBooks } from '../../services';

const ShopList = ({ books, booksLoaded }) => {
  const loadBooks = () => {
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

  return <ul className="list-group">{renderItem}</ul>;
};

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = {
  booksLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
