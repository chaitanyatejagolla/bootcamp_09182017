import * as React from 'react';
import { ViewCarRow } from './view-car-row';
import { EditCarRow } from './edit-car-row';
export class Table extends React.Component {

  render() {
    return <table>
      <thead>
        <tr>
          <th onClick={() => this.props.onSort('id', 'number')}>ID</th>
          <th onClick={() => this.props.onSort('make', 'text')}>Make</th>
          <th onClick={() => this.props.onSort('model', 'text')}>Model</th>
          <th onClick={() => this.props.onSort('year', 'number')}>Year</th>
          <th onClick={() => this.props.onSort('color', 'text')}>Color</th>
          <th onClick={() => this.props.onSort('price', 'number')}>Price</th>
          <th onClick={() => this.props.onSort('price', 'number')}>Action</th>
        </tr>
      </thead>
      <tbody>  
        {this.props.cars.map(car => {
          if( this.props.editCarId === car.id) {
            return <EditCarRow key={car.id} onSave={this.props.onSave} onCancel={this.props.onCancel} car={car} />;
          }
          else {
            return <ViewCarRow key={car.id} onEdit={this.props.onEdit} onDelete={this.props.onDelete} car={car} />;
          }
        })}
      </tbody>
    </table>;
  }
}
