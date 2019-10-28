import React, { Component } from 'react';

class ColorToggle extends Component {
  constructor(props) {
    super(props);
  }

  handleDayToggie = e => {
    this.props.DayToggle(e.target.checked);
  }

  render() {
    const { nightMode } = this.props;
    return (
      <div className="color__toggle">
        <input
          type="checkbox"
          id="day"
          onChange={this.handleDayToggie}
          defaultChecked={nightMode ? true : false}
        />
        <label htmlFor="day">
          <div className="planet">
          </div>
        </label>
      </div>
    );
  }
}

export default ColorToggle;