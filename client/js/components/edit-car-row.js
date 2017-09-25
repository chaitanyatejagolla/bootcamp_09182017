import * as React from 'react';
import { Car } from '../models/car';
export class EditCarRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.car.id,
      make: this.props.car.make,
      model: this.props.car.model,
      year: this.props.car.year,
      color: this.props.car.color,
      price: this.props.car.price
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    });
  }

  handleSave = () => {
    this.props.onSave(
      new Car({...this.state})
    );
  }

  render() {
    return <tr>
      <td>{this.props.car.id}</td>
      <td> <input type="text" value={this.state.make} name='make' onChange={this.handleChange} /></td>
      <td> <input type="text" value={this.state.model} name='model' onChange={this.handleChange} /></td>
      <td> <input type="number" value={this.state.year} name='year' onChange={this.handleChange} /></td>
      <td> <input type="color" value={this.state.color} name='color' onChange={this.handleChange} /></td>
      <td> <input type="number" value={this.state.price} name='price' onChange={this.handleChange} /></td>
      <td>
        <button type="button" onClick={this.handleSave}>Save</button>
        <button type="button" onClick={this.props.onCancel}>Cancel</button>
      </td>
    </tr>;
  }
}