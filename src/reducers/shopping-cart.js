//для сложения общих покупок
const sumTotal = (arr) => arr.reduce((acc, current) => acc + current.total, 0);

const updateCartItems = (state, currentProduct, idProduct) => {
  // с сервера цены и количества нет имитируем это тут
  let count = 1;
  const total = count * 100;

  console.log(state);

  // тут проверяется есть ли товар такой в корзине
  const isElement = state.shoppingCart.cartItems.filter(
    (item) => item.id === idProduct
  )[0];
  if (isElement) {
    // если такой товар есть в корзине
    const newCount = ++isElement.count; // увеличиваем количество товаров
    // 1. Скопировать объект и изменить в нём данные
    const newItems = {
      ...isElement,
      count: newCount,
      total: newCount * 100,
    };
    const oldArr = state.shoppingCart.cartItems;
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
      cartItems: newCartItems,
    };
  } else {
    return {
      cartItems: [
        ...state.shoppingCart.cartItems,
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
  const newCartItems = state.shoppingCart.cartItems.filter(
    (item) => item.id !== idProduct
  );

  const newTotalAmount = sumTotal(newCartItems);

  return {
    orderTotal: newTotalAmount,
    cartItems: newCartItems,
  };
};

// универсальная функция которая добавляет или удаляет товар с
const operationDecInc = (state, idProduct, nameOperation) => {
  const carts = state.shoppingCart.cartItems;
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
  const newTotalAmount = sumTotal(newCartItems);
  return {
    orderTotal: newTotalAmount,
    cartItems: newCartItems,
  };
};

//добавления количества товара
const incrementGood = (state, idProduct) =>
  operationDecInc(state, idProduct, 'inc');

//уменьшение количества товара
const decrementGood = (state, idProduct) =>
  operationDecInc(state, idProduct, 'dec');

const createTotalAmount = (state) => {
  console.log(state);
  const newTotalAmount = state.shoppingCart.cartItems.reduce((acc, current) => {
    console.log(current);
    return acc + current.total;
  }, 0);
  console.log('newTotalAmount', newTotalAmount);

  return {
    orderTotal: newTotalAmount,
    ...state.shoppingCart,
  };
};

const updateShoppingCart = (state, action) => {
  // console.log(' updateShoppingCart', state);

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'ADD_TO_PRODUCT':
      const idProduct = action.payload;
      const currentProduct = state.bookList.books.find(
        (item) => item.id === idProduct
      );
      return updateCartItems(state, currentProduct, idProduct);
    case 'DELETE_PRODUCT':
      return deleteGood(state, action.payload);
    case 'INCREMENT_PRODUCT':
      return incrementGood(state, action.payload);
    case 'DECREMENT_PRODUCT':
      return decrementGood(state, action.payload);
    case 'TOTAL_AMOUNT_CART':
      return createTotalAmount(state);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
