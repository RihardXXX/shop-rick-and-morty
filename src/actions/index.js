const booksLoaded = (books) => {
  return {
    type: 'SUCCESS_BOOKS',
    payload: books,
  };
};

const booksLoading = () => {
  return {
    type: 'LOADING_BOOKS',
  };
};

export { booksLoaded, booksLoading };
