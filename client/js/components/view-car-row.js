import * as React from 'react';
import * as PropTypes from 'prop-types';
export const ViewCarRow = props => <tr>
  <td>{props.car.id}</td>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
  <td>
    <button type="button" onClick={() => props.onDelete(props.car.id)}>Delete</button>
    <button type="button" onClick={() => props.onEdit(props.car.id)}>Edit</button>
  </td>
</tr>;


ViewCarRow.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};