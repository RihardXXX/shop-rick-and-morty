const initialState = {
  books: [],
  isLoading: false,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'Рик Санчес',
      count: 2,
      total: 200,
    },
    {
      id: 2,
      name: 'Морти Смит',
      count: 1,
      total: 100,
    },
  ],
  totalOrders: 400,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_START':
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
