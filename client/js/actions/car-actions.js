import { actionTypes } from '../action-types';

export const editCarActionCreator =
  carId => ({ type: actionTypes.EDIT, carId });

export const cancelCarActionCreator =
  () => ({ type: actionTypes.CANCEL });