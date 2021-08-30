import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

// Чтобы экшены можно бфло вкладывать и в виде чисто строк а не объектов
const setupStringAction = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    console.log('метка');
    return next({
      type: action,
    });
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(setupStringAction));

store.dispatch('start');

export default store;
