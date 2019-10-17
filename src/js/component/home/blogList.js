import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

import TagGroup from './../utils/tagGroup';
import HeartGroup from './../../container/heartGroupContainer';

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFromNew: [],
    }
  }

  componentDidMount = () => {
    const { firePosts } = this.props;
  }

  getDay = timestamp => {
    const t = new Date(timestamp);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MM = (t.getMonth() + 1 < 10 ? '0' : '') + (t.getMonth() + 1);
    const dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    const ww = weekday[t.getDay()];
    const h = (t.getHours() < 10 ? '0' : '') + t.getHours();
    const m = (t.getMinutes() < 10 ? '0' : '') + t.getMinutes();
    const date = `${t.getFullYear()}/${MM}/${dd} (${ww}) ${h}:${m}`;
    return date;
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
                <div className="time">
                  <i className="far fa-clock"></i>
                  {this.getDay(e.date)}
                </div>
              </div>
          )) }
        </article>
      )
    } else if (firePosts) {
      return (
        <article className="grid">
          { Object.values(firePosts).map(e => (
            <div className="card__element" key={e.date}>
              <button
                type="button"
                className="category btn"
                value={e.category}
                onClick={this.handleCategory}
              >
                {e.category}
              </button>
              <h2 className="title">{e.title}</h2>
              <div className="post__info">
                <div className="time">
                  <i className="far fa-clock"></i>
                  {this.getDay(e.date)}
                </div>
                <HeartGroup firePost={e} id={e.date} />
              </div>
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
              <div className="footer__info">
                { e.tagArr
                  ? <TagGroup tagArr={e.tagArr} />
                  : ''
                }
              </div>
            </div>
          )) }
        </article>
      )
    } return ('No Result (╥﹏╥)')
  }
}

export default BlogList;