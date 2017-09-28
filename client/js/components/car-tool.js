import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';
export class CarTool extends React.PureComponent {

  static propTypes = {
    refreshCars: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.refreshCars();
  }

  render() {
    return <div>
      <ToolHeader headerText='Car Tool'/>
      <CarTable {...this.props} />
      <CarForm {...this.props} submitButtonText="Add Car"/>
    </div>;
  }
}