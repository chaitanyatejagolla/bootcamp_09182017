import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ViewCarRow } from './view-car-row';
import { EditCarRow } from './edit-car-row';

export const CarTable = props => <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.cars.map(car => {
      if (props.editCarId === car.id) {
        return <EditCarRow key={car.id} onSave={props.saveCar} onCancel={props.cancelCar} car={car} />;
      }
      else {
        return <ViewCarRow key={car.id} onEdit={props.editCar} onDelete={props.deleteCar} car={car} />;
      }
    })}
  </tbody>
</table>;



CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  editCarId: PropTypes.number.isRequired,
  saveCar: PropTypes.func.isRequired,
  deleteCar: PropTypes.func.isRequired,
  editCar: PropTypes.func.isRequired,
  cancelCar: PropTypes.func.isRequired,
};

CarTable.defaultProps = {
  editCarId: 0,
};