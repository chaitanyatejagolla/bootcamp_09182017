import { actionTypes } from '../action-types';

import { refreshCarsDone } from './refresh-cars';

export const saveCarRequest =
  car => ({ type: actionTypes.SAVE_REQUEST, car });

export const saveCar = car => {
  
  return dispatch => {

    dispatch(saveCarRequest(car));

    return fetch('http://localhost:3010/cars/'
      + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(() => fetch('http://localhost:3010/cars'))
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

  };
  
};