import { actionTypes } from '../action-types';

export const cars = (state = [], action) => {

  switch (action.type) {
    case actionTypes.REFRESH_REQUEST:
      return action.cars;
    case actionTypes.REFRESH_DONE:
      return action.cars;
    default:
      return state;
  }

};