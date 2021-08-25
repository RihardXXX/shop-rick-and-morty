const initialState = {
  books: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_BOOKS':
      return {
        books: [],
        isLoading: true,
      };
    case 'SUCCESS_BOOKS':
      return {
        books: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
