import * as React from 'react';

export class FoodItem extends React.Component {

  render() {
    return <tr>
      <td>{this.props.food.name}</td>
      <td>{this.props.food.rank}</td>
    </tr>;
  }
}
