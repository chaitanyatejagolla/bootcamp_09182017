import * as React from 'react';
import { Car } from '../models/car';
export class ViewCarRow extends React.Component {

  render() {
    return <tr>
      <td>{this.props.car.id}</td>
      <td>{this.props.car.make}</td>
      <td>{this.props.car.model}</td>
      <td>{this.props.car.year}</td>
      <td>{this.props.car.color}</td>
      <td>{this.props.car.getFormattedPrice()}</td>
      <td>
        <button type="button" onClick={() => this.props.onDelete(this.props.car.id)}>Delete</button>
        <button type="button" onClick={() => this.props.onEdit(this.props.car.id)}>Edit</button>
      </td>
    </tr>;
  }
}