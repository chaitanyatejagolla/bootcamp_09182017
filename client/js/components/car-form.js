import * as React from 'react';
import { Car } from '../models/car';
import * as PropTypes from 'prop-types';

export const CarForm = props => {

  let carInput = {};

  const handleClick = () => {
    props.addCar(new Car({
      make: carInput.make.value,
      model: carInput.model.value,
      year: Number(carInput.year.value),
      color: carInput.color.value,
      price: Number(carInput.price.value)
    }));
    carInput.make.value = '';
    carInput.model.value = '';
    carInput.year.value = 0;
    carInput.color.value = '';
    carInput.price.value = 0;
  };

  return <form>
    <div>
      <label htmlFor="car-make-input">Car Make</label>
      <input type="text" ref={input => carInput.make = input} id="car-make-input" defaultValue={carInput.make} />
    </div>
    <div>
      <label htmlFor="car-model-input">Car Model</label>
      <input type="text" ref={input => carInput.model = input} id="car-model-input" defaultValue={carInput.make} />
    </div>
    <div>
      <label htmlFor="car-year-input">Car Year</label>
      <input type="number" ref={input => carInput.year = input} id="car-year-input" defaultValue={carInput.year} />
    </div>
    <div>
      <label htmlFor="car-color-input">Car Color</label>
      <input type="color" ref={input => carInput.color = input} id="car-color-input" defaultValue={carInput.color} />
    </div>
    <div>
      <label htmlFor="car-price-input">Car Price</label>
      <input type="number" ref={input => carInput.price = input} id="car-price-input" defaultValue={carInput.price} />
    </div>
    <button type="button" onClick={handleClick}>{props.submitButtonText}</button>
  </form>;
};


CarForm.propTypes = {
  submitButtonText: PropTypes.string.isRequired,
  addCar: PropTypes.func,
  price: PropTypes.number,
  color: PropTypes.string,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string
};