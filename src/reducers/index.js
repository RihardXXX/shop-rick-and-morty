const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_BOOKS':
      return {
        books: [],
        isLoading: true,
        error: null,
      };
    case 'SUCCESS_BOOKS':
      return {
        books: action.payload,
        isLoading: false,
        error: null,
      };
    case 'ERROR_BOOKS':
      return {
        books: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
