import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseForm } from './base-form';
export class EditCarRow extends BaseForm {

  static propTypes = {
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

  emptyForm = () => ({
    make: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
  });

  constructor(props) {
    super(props);
    if (this.props.car) {
      this.state = { ...this.props.car };
    } else {
      this.state = this.emptyForm();
    }
  }

  handleSave = () => {
    this.props.onSave({
      ...this.state,
      id: this.props.car.id,
    });
  }

  handleCancel = () => {
    this.props.onCancel();
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
        <button type="button" onClick={this.handleCancel}>Cancel</button>
      </td>
    </tr>;
  }
}
