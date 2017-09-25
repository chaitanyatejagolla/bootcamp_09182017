import * as React from 'react';

export class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calcInput: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    });
  }

  handleAdd = () => {
    this.props.add(this.state.calcInput);
  }

  handleSubtract = () => {
    this.props.subtract(this.state.calcInput);
  }

  handleMultiply = () => {
    this.props.multiply(this.state.calcInput);
  }

  handleDivide = () => {
    this.props.divide(this.state.calcInput);
  }

  render() {
    return <div>
      <div>
        <input type='number' value={this.state.calcInput} name='calcInput' onChange={this.handleChange} />
      </div>
      <div>
        <button type='button' onClick={this.handleAdd}> + </button>
        <button type='button' onClick={this.handleSubtract}> - </button>
        <button type='button' onClick={this.handleMultiply}> * </button>
        <button type='button' onClick={this.handleDivide}> / </button>
      </div>
      <div>
        <span>Result: {this.props.result}</span>
      </div>
    </div>;
  }
}