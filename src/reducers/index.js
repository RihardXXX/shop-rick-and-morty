const initialState = {
  books: [],
  isLoading: false,
  error: null,
  cartItems: [],
  totalOrders: 400,
};

const updateCartItems = (state, currentProduct, idProduct) => {
  // с сервера цены и количества нет имитируем это тут
  let count = 1;
  const total = count * 100;

  // тут проверяется есть ли товар такой в корзине
  const isElement = state.cartItems.filter((item) => item.id === idProduct)[0];
  if (isElement) {
    // если такой товар есть в корзине
    const newCount = ++isElement.count; // увеличиваем количество товаров
    // 1. Скопировать объект и изменить в нём данные
    const newItems = {
      ...isElement,
      count: newCount,
      total: newCount * 100,
    };
    const oldArr = state.cartItems;
    // 2. Узнать под каким номером идёт старый объект
    const indexObg = oldArr.indexOf(isElement);
    // 3. Собираем массив с элементами до индекса и после
    const newCartItems = [
      ...oldArr.slice(0, indexObg),
      newItems,
      ...oldArr.slice(indexObg + 1),
    ];
    // newCartItems.splice(indexObg, 1, newItems);
    return {
      ...state,
      cartItems: newCartItems,
    };
  } else {
    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        {
          ...currentProduct,
          count,
          total,
        },
      ],
    };
  }
};

// удаление товара
const deleteGood = (state, idProduct) => {
  const newCartItems = state.cartItems.filter((item) => item.id !== idProduct);
  return {
    ...state,
    cartItems: newCartItems,
  };
};

// универсальная функция которая добавляет или удаляет товар с
const operationDecInc = (state, idProduct, nameOperation) => {
  const carts = state.cartItems;
  const incProduct = carts.find((item) => item.id === idProduct);
  const indexProd = carts.indexOf(incProduct);
  const newCount =
    nameOperation === 'inc' ? ++incProduct.count : --incProduct.count;
  console.log(newCount);
  // если до 0 количество товара дошло
  if (newCount <= 0) {
    return deleteGood(state, idProduct);
    // return { ...state };
  }
  const newIncProduct = {
    ...incProduct,
    count: newCount,
    total: newCount * 100,
  };
  const newCartItems = [
    ...carts.slice(0, indexProd),
    newIncProduct,
    ...carts.slice(indexProd + 1),
  ];
  return {
    ...state,
    cartItems: newCartItems,
  };
};

//добавления количества товара
const incrementGood = (state, idProduct) =>
  operationDecInc(state, idProduct, 'inc');

//уменьшение количества товара
const decrementGood = (state, idProduct) =>
  operationDecInc(state, idProduct, 'dec');

const reducer = (state = initialState, action) => {
  console.log('action.type', action.type);
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
    case 'ADD_TO_PRODUCT':
      const idProduct = action.payload;
      const currentProduct = state.books.find((item) => item.id === idProduct);
      return updateCartItems(state, currentProduct, idProduct);
    case 'DELETE_PRODUCT':
      return deleteGood(state, action.payload);
    case 'INCREMENT_PRODUCT':
      return incrementGood(state, action.payload);
    case 'DECREMENT_PRODUCT':
      return decrementGood(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
