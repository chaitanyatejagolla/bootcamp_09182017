import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CarTool } from './components/car-tool';
import { Car } from './models/car';

// import { Calculator } from './components/calculator';
import { createStore, bindActionCreators } from 'redux';


const createAddAction = car => ({ type: 'ADD', car });
const createEditAction = car => ({ type: 'EDIT', car });
const createDeleteAction = car => ({ type: 'DELETE', car });
const createSaveAction = car => ({ type: 'SAVE', car });
const createCancelAction = car => ({ type: 'CANCEL', car });


let cars = [new Car({ id: 1, make: 'Honda', model: 'CRV', year: 2014, color: '#FF0000 ', price: '35000' }),
  new Car({ id: 2, make: 'Tesla', model: 'Model3', year: 2018, color: '#0000FF ', price: '30000' })];

const addCar = (cars, car) => {
  car.id = Math.max(...cars.map(c => c.id)) + 1;
  return cars.concat(new Car(car));
};

const carReducer = (state = { cars, editCarId: 0 }, action) => {

  console.log('state: ', state, 'action: ', action);


  // this.cars.addCar(car);
  // this.setState({
  //   cars: this.cars.sortCars('id', 'number')
  // });


  switch (action.type) {
    case 'ADD':
      return { ...state, cars: addCar(state.cars, action.car) };
    case 'EDIT':
      return { ...state, cars: state.result - action.value };
    case 'DELETE':
      return { ...state, result: state.result * action.value };
    case 'SAVE':
      return { ...state, result: state.result / action.value };
    case 'CANCEL':
      return { ...state, result: state.result / action.value };
    default:
      return state;
  }
};

// const createStore = reducer => {

//   let currentState = undefined;
//   const subscriptions = [];

//   return {
//     getState: () => currentState,
//     subscribe: cb => subscriptions.push(cb),
//     dispatch: action => {
//       currentState = reducer(currentState, action);
//       subscriptions.forEach(cb => cb());
//     },
//   };

// };

const store = createStore(carReducer);

store.subscribe(() => {
  ReactDOM.render(<CarTool cars={store.getState() && store.getState().cars} editCarId={store.getState() && store.getState().editCarId} add={add} edit={edit} delete={deleteCar} save={save} cancel={cancel} />, document.querySelector('main'));
});

// const bindActionCreators = (actionMap, dispatch) => {

//   const actions = {};

//   Object.keys(actionMap).forEach(actionKey => {
//     actions[actionKey] = (...value) => dispatch(actionMap[actionKey](...value));
//   });

//   return actions;
// };

const { add, edit, save, deleteCar, cancel } = bindActionCreators({
  add: createAddAction,
  edit: createEditAction,
  save: createSaveAction,
  deleteCar: createDeleteAction,
  cancel: createCancelAction
}, store.dispatch);


// ReactDOM.render(<Calculator result={store.getState() && store.getState().result} add={add} subtract={subtract} multiply={multiply} divide={divide} />, document.querySelector('main'));


//ReactDOM.render(<ColorTool />, document.querySelector('main'));
ReactDOM.render(<CarTool editCarId={store.getState() && store.getState().editCarId} cars={cars} add={add} edit={edit} delete={deleteCar} save={save} cancel={cancel} />, document.querySelector('main'));