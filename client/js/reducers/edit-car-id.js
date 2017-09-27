import { actionTypes } from '../action-types';

export const editCarId = (state = 0, action) => {
  
  switch (action.type) {
    case actionTypes.SAVE_REQUEST:
      return 0;
    case actionTypes.EDIT:
      return action.carId;
    case actionTypes.CANCEL:
      return 0;
    default:
      return state;
  }
  
};