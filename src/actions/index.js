const booksLoading = () => {
  return {
    type: 'LOADING_BOOKS',
  };
};

const booksLoaded = (books) => {
  return {
    type: 'SUCCESS_BOOKS',
    payload: books,
  };
};

const booksError = (error) => {
  return {
    type: 'ERROR_BOOKS',
    payload: error,
  };
};

export { booksLoaded, booksLoading, booksError };
