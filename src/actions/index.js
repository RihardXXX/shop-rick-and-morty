const loadedBooks = (books) => {
  return {
    type: 'LOADED_BOOKS',
    payload: books,
  };
};

export { loadedBooks };
