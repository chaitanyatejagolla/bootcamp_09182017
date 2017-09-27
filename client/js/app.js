import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStore } from './app-store';
import * as carActionCreators from './actions/car-actions';
import { refreshCars } from './actions/refresh-cars';
import { addCar } from './actions/add-car';
import { deleteCar } from './actions/delete-car';
import { saveCar } from './actions/save-car';
import { CarTool } from './components/car-tool';

const CarToolContainer = connect(
  ({ cars, editCarId }) => ({ cars, editCarId }),
  dispatch => bindActionCreators({
    addCar,
    saveCar,
    deleteCar,
    editCar: carActionCreators.editCarActionCreator,
    cancelCar: carActionCreators.cancelCarActionCreator,
    refreshCars,
  }, dispatch))(CarTool);

ReactDOM.render(<Provider store={appStore}>
  <CarToolContainer />
</Provider>, document.querySelector('main'));