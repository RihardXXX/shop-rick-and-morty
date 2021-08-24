const booksLoaded = (books) => {
  return {
    type: 'LOADED_BOOKS',
    payload: books,
  };
};

export { booksLoaded };
