import React, { Component } from 'react';

class TagInput extends Component {
  constructor(props) {
    super(props);
  }

  handleTagChange = e => {
    this.props.handleTagChange(e);
  }

  addTagArr = e => {
    this.props.addTagArr(e);
  }
  deleteTagArr = (event, e) => {
    this.props.deleteTagArr(event, e);
  }

  render() {
    const { tagArr, tag } = this.props;

    return (
      <div>
        {
          tagArr
          ? tagArr.map((e, index) => (
            <span className="input__tag" key={index}>
              {e}
              <i className="cross fas fa-times" onClick={event => this.deleteTagArr(event, e)} />
            </span>))
          : ''
        }
        <input
          className="form-element"
          name="tag"
          value={tag}
          onChange={this.handleTagChange}
          onKeyPress={this.addTagArr}
          placeholder="請以 , 區分多筆標籤"
        />
      </div>
    );
  }
}

export default TagInput;
