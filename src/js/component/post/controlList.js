import React, { Component } from 'react';

class ControlList extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    this.props.handleDelete();
  }

  render() {
    const { id, history } = this.props;

    return (
      <div className="row control__group">
        <button
          className="btn btn__primary"
          role="link"
          type="button"
          onClick={() => {
            history.push(`/edit/${id}`);
          }}
        >
          Update
        </button>
        <button
          className="btn btn__del"
          type="button"
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ControlList;
