import { actionTypes } from '../action-types';

import { refreshCarsDone } from './refresh-cars';

export const deleteCarRequest =
  carId => ({ type: actionTypes.DELETE_REQUEST, carId });

export const deleteCar = carId => {

  return dispatch => {

    dispatch(deleteCarRequest(carId));

    return fetch('http://localhost:3010/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(() => fetch('http://localhost:3010/cars'))
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

  };

};