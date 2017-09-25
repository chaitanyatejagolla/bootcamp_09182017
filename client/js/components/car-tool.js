import * as React from 'react';
// import { Cars } from '../models/cars';
import { ToolHeader } from './tool-header';
import { Table } from './table';
import { Form } from './form';
export class CarTool extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: this.cars.sortCars('id', 'number'),
  //     editCarId: -1
  //   };
  // }

  // handleDelete = (carId) => {
  //   this.cars.deleteCar(carId);
  //   this.setState({
  //     cars: this.cars.sortCars('id', 'number'),
  //   });
  // }

  // handleCancel = () => {
  //   this.setState({
  //     editCarId: -1
  //   });
  // }

  // handleEdit = (carId) => {
  //   this.setState({
  //     editCarId: carId
  //   });
  // }

  // handleSort = (name, type) => {
  //   this.setState({
  //     cars: this.cars.sortCars(name, type)
  //   });
  // }

  // handleSave = (car) => {
  //   this.cars.editCar(car);
  //   this.setState({
  //     cars: this.cars.sortCars('id', 'number'),
  //     editCarId: -1
  //   });
  // }

  handleClick = (car) => {
    this.props.add(car);
  }

  render() {
    return <div>
      <ToolHeader headerText='Car Tool'/>
      <Form onClick={this.handleClick} submitButtonText="Add Car"/>
      <Table onSort={this.handleSort}  onSave={this.handleSave} onCancel={this.handleCancel} onEdit={this.handleEdit} editCarId={this.props.editCarId} onDelete={this.handleDelete} cars={this.props.cars} />
    </div>;
  }
}