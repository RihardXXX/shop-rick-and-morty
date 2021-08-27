const booksLoading = () => {
  return {
    type: 'FETCH_BOOKS_START',
  };
};

const booksLoaded = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const loadBooks = (getAllBooks, dispatch) => () => {
  dispatch(booksLoading());
  getAllBooks()
    .then((books) => dispatch(booksLoaded(books)))
    .catch((error) => dispatch(booksError(error)));
};

export { loadBooks };
