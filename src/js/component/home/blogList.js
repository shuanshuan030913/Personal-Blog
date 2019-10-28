import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

import TagList from './../utils/tagList';
import Info from './../utils/info';
import Time from './../utils/time';

const Image = ({ image }) => (
  <div className="img">
    <img src={image} />
  </div>
)

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFromNew: [],
    }
  }

  componentDidMount() {
    const { firePosts } = this.props;
  }

  handleCategory = e => {
    this.props.searchCategorys(e.target.value);
    this.props.history.push({
      pathname: '/',
      search: `?category=${e.target.value}`,
    })
  }

  render() {
    const { firePosts, list, history } = this.props;

    if (firePosts && list) {
      return (
        <article className="list">
          { Object.values(firePosts).map(e => (
              <div
                className="card__element"
                key={e.date}
                role="link"
              >
                <h2 className="title">
                  <button
                    type="button"
                    className="category btn"
                    value={e.category}
                    onClick={this.handleCategory}
                  >
                    {e.category}
                  </button>
                  <span
                    onClick={() => {
                      history.push(`/blog/${e.date}`);
                    }}
                  >
                    {e.title}
                  </span>
                </h2>
                <Time date={e.date} />
              </div>
          )) }
        </article>
      )
    } else if (firePosts) {
      return (
        <article className="grid">
          { Object.values(firePosts).map((e, i) => (
            <div className="card__element" key={e.date}>
              <button
                type="button"
                className="category btn"
                value={e.category}
                onClick={this.handleCategory}
              >
                {e.category}
              </button>
              <h2
                className="title"
                onClick={() => {
                  history.push(`/blog/${e.date}`);
                }}
              >
                {e.title}
              </h2>
              <Info post={e} />
              <Image image={e.image} />
              <p className="content">{e.body}</p>
              <button
                className="readmore btn btn__secondary"
                role="link"
                onClick={() => {
                  history.push(`/blog/${e.date}`);
                }}
              >
                閱讀更多
              </button>
              { e.tagArr  ? <TagList tagArr={e.tagArr} /> : '' }
            </div>
          )) }
        </article>
      )
    } return ('No Result (╥﹏╥)')
  }
}

export default BlogList;