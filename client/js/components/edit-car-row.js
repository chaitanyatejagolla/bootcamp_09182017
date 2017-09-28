import * as React from 'react';
import * as PropTypes from 'prop-types';

export const EditCarRow = props => {

  let carInput ={};

  const handleSave = () => {
    props.onSave({
      make: carInput.make.value,
      model: carInput.model.value,
      year: Number(carInput.year.value),
      color: carInput.color.value,
      price: Number(carInput.price.value),
      id: props.car.id,
    });
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return <tr>
    <td>{props.car.id}</td>
    <td> <input type="text" ref={input => carInput.make = input} defaultValue={props.car.make} /></td>
    <td> <input type="text" ref={input => carInput.model = input} defaultValue={props.car.model} /></td>
    <td> <input type="number" ref={input => carInput.year = input} defaultValue={props.car.year} /></td>
    <td> <input type="color" ref={input => carInput.color = input} defaultValue={props.car.color} /></td>
    <td> <input type="number" ref={input => carInput.price = input} defaultValue={props.car.price} /></td>
    <td>
      <button type="button" onClick={handleSave}>Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </td>
  </tr>;
};

EditCarRow.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

