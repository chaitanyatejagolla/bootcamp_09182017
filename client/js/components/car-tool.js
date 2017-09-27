import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ToolHeader } from './tool-header';
import { Table } from './table';
import { Form } from './form';
export class CarTool extends React.Component {

  static propTypes = {
    refreshCars: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.refreshCars();
  }

  render() {
    return <div>
      <ToolHeader headerText='Car Tool'/>
      <Table {...this.props} />
      <Form {...this.props} submitButtonText="Add Car"/>
    </div>;
  }
}