import { actionTypes } from '../action-types';

const refreshCarsRequest = () => ({ type: actionTypes.REFRESH_REQUEST, cars:[] });

export const refreshCarsDone = cars => ({ type: actionTypes.REFRESH_DONE, cars });

export const refreshCars = () => {

  return dispatch => {

    dispatch(refreshCarsRequest());

    return fetch('http://localhost:3010/cars')
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

  };

};