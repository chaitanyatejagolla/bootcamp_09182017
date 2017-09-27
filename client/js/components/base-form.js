import * as React from 'react';

export class BaseForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value
    });
  }
}