const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED_BOOKS':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
