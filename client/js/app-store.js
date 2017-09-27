import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cars } from './reducers/cars';
import { editCarId } from './reducers/edit-car-id';

export const appStore = createStore(
  combineReducers({ cars, editCarId }),
  applyMiddleware(thunk),
);