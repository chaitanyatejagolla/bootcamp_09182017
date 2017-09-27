import { actionTypes } from '../action-types';

const findCarIndex = (cars, carId) =>
  cars.findIndex(c => c.id === carId);


const addCar = (cars, car) => {
  return cars.concat({
    ...car,
    id: Math.max(...cars.map(c =>c.id) + 1 )
  });
};

const saveCar = (cars, car) => {
  
  const carIndex = findCarIndex(cars, car.id);
  
  return [
    ...cars.slice(0, carIndex),
    car,
    ...cars.slice(carIndex + 1),
  ];
  
};

const deleteCar = (cars, carId) => {
  
  const carIndex = findCarIndex(cars, carId);
  
  return [
    ...cars.slice(0, carIndex),
    ...cars.slice(carIndex + 1),
  ];
};

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