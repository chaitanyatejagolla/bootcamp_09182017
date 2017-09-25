import * as React from 'react';
import { Car } from '../models/car';
export class Form extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    };
  }

  handleClick = () => {
    this.props.onClick(new Car({...this.state}));
    this.setState({
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    });
  }

  render() {
    return <form>
      <div>
        <label htmlFor="car-make-input">Car Make</label>
        <input type="text" id="car-make-input" value={this.state.make} name='make' onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="car-model-input">Car Model</label>
        <input type="text" id="car-model-input" value={this.state.model} name='model' onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="car-year-input">Car Year</label>
        <input type="number" id="car-year-input" value={this.state.year} name='year' onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="car-color-input">Car Color</label>
        <input type="color" id="car-color-input" value={this.state.color} name='color' onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="car-price-input">Car Price</label>
        <input type="number" id="car-price-input" value={this.state.price} name='price' onChange={this.handleChange} />
      </div>
      <button type="button" onClick={this.handleClick}>{this.props.submitButtonText}</button>
    </form>;
  }
}
