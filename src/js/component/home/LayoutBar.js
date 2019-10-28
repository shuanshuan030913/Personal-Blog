import React, { Component } from 'react';
import ColorToggle from './../../container/colorToggleContainer';

class LayoutBar extends Component {
  constructor(props) {
    super(props);
  }

  layoutToggle = key => {
    this.props.layoutToggle(key);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="layout__bar">
        <div>
          檢視：
          <button
            type="button"
            className={ list ? 'btn btn__secondary active' : 'btn btn__secondary' }
            onClick={() => this.layoutToggle('list')}
          >
            清單
          </button>
          <button
            type="button"
            className={ list ? 'btn btn__secondary' : 'btn btn__secondary active' }
            onClick={() => this.layoutToggle('')}
          >
            網格
          </button>
        </div>
        <ColorToggle />
      </div>
    );
  }
}

export default LayoutBar;