import { createStore, combineReducers } from 'redux';
import filterReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

// Store creation

