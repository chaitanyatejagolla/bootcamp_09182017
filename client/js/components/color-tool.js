import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
      colorHexCode: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      colorName: e.target.value
    });
  }

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colors.map(color => {
          return <li>{color.name}</li>;
        })}
      </ul>
      <form>
        <div>
          <label htmlFOr = "color-name-input">Color Name</label>
          <input type="text" id="color-name-input" value={this.state.colorName} onChange={this.onChange}/>
        </div>
      </form>
    </div>;
  }
}