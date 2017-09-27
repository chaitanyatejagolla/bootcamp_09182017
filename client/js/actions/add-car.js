import { actionTypes } from '../action-types';
import { refreshCarsDone } from './refresh-cars';

export const addCarRequest =
  car => ({ type: actionTypes.INSERT_REQUEST, car });

export const addCar = car => {
  
  return dispatch => {

    dispatch(addCarRequest(car));

    return fetch('http://localhost:3010/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(() => fetch('http://localhost:3010/cars'))
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

  };
  
};