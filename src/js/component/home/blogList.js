import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

import TagGroup from './../utils/tagGroup';
import HeartGroup from './../../container/heartGroupContainer';

import random01 from '../../../images/random01.jpg';
import random02 from '../../../images/random02.jpg';
import random03 from '../../../images/random03.jpg';
import random04 from '../../../images/random04.jpg';
import random05 from '../../../images/random05.jpg';
import random06 from '../../../images/random06.jpg';


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

  handlePic = i => {
      switch (i % 6) {
        case 0:
          return random01;
          break;
        case 1:
          return random02;
          break;
        case 2:
          return random03;
          break;
        case 3:
          return random04;
          break;
        case 4:
          return random05;
          break;
        case 5:
          return random06;
          break;
        default:
          return random01;
      }
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
              <h2 className="title">{e.title}</h2>
              <div className="post__info">
                <div className="time">
                  <i className="far fa-clock"></i>
                  {this.getDay(e.date)}
                </div>
                <HeartGroup firePost={e} id={e.date} />
              </div>
              { e.images
                ? <div className="img">
                    <img src={e.images} />
                  </div>
                : ''
              }
              <p className="content">{e.body}</p>
              <button
                className="readmore btn btn__secondary"
                role="link"
                onClick={() => {
                  console.log('i', this.handlePic(i));
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