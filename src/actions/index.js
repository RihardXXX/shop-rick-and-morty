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

const addToProduct = (id) => {
  return {
    type: 'ADD_TO_PRODUCT',
    payload: id,
  };
};

const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: id,
  };
};

const incrementProduct = (id) => {
  return {
    type: 'INCREMENT_PRODUCT',
    payload: id,
  };
};

const decrementProduct = (id) => {
  return {
    type: 'DECREMENT_PRODUCT',
    payload: id,
  };
};

const loadBooks = (getAllBooks, dispatch) => () => {
  dispatch(booksLoading());
  getAllBooks()
    .then((books) => {
      dispatch(booksLoaded(books));
    })
    .catch((error) => dispatch(booksError(error)));
};

const loadTotalAmount = () => {
  return {
    type: 'TOTAL_AMOUNT_CART',
  };
};

export {
  loadBooks,
  addToProduct,
  deleteProduct,
  incrementProduct,
  decrementProduct,
  loadTotalAmount,
};
