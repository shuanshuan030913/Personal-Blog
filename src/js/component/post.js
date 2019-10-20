import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
// https://github.com/rexxars/react-markdown
import Disqus from 'disqus-react';
// https://www.npmjs.com/package/disqus-react

import Aside from './../container/asideContainer';
import TagGroup from './utils/tagGroup';
import HeartGroup from './../container/heartGroupContainer';


class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { handleAsideInit, GetFirePost } = this.props;
    const { id } = this.props.match.params;
    handleAsideInit();
    GetFirePost(id);
  }

  componentDidUpdate(prevProps) {
    const { editDone, history } = this.props;
    if (prevProps.editDone !== editDone && editDone) {
      history.push('/');
    }
  }

  handleDelete = () => {
    const { id } = this.props.match.params;
    const { deleteFirePost } = this.props;

    if (window.confirm('Sure to delete it?')) {
      deleteFirePost(id);
    }
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

  render() {
    const { history, isLoading, firePost, asideToggle, isSignIn, GetFirePost } = this.props;
    const { id } = this.props.match.params;

    let date = 0;
    if (firePost.date) {
      date = this.getDay(firePost.date);
    }

    const currentUrl = `http://localhost:8080/Personal-Blog/dist${this.props.match.url}`
    console.log('currentUrl', currentUrl);
    const disqusShortname = 'blog';
    const disqusConfig = {
      url: currentUrl,
      identifier: id,
      title: firePost.title,
    };

    return (
      <main className="page">
        <Aside asideToggle={asideToggle} history={history}/>
        <section className={asideToggle ? 'main__content active' : 'main__content'}>
          {
            isLoading
            ? <div className="cssload-loader"></div>
            : <article className="wrap card__element">
                <button type="button" className="category btn">{ firePost.category }</button>
                <h2 className="title">{ firePost.title }</h2>
                <div className="post__info">
                  <div className="time">
                    <i className="far fa-clock"></i>
                    {date}
                  </div>
                  <HeartGroup
                    firePost={firePost}
                    id={this.props.match.params.id}
                  />
                </div>
                { firePost.images
                  ? <div className="img">
                      <img src={firePost.images} />
                    </div>
                  : ''
                }
                <ReactMarkdown className="markdown__content" source={firePost.body} escapeHtml={false} />
                <div className="footer__info">
                  { firePost.tagArr
                    ? <TagGroup tagArr={firePost.tagArr} />
                    : ''
                  }
                </div>
                <hr />
                {isSignIn
                  ? (
                      <div className="row control__group">
                        <button
                          className="btn btn__primary"
                          role="link"
                          type="button"
                          onClick={() => {
                            history.push(`/edit/${this.props.match.params.id}`);
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
                      </div>)
                  : ''
                }
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
              </article>
          }
        </section>
      </main>
    );
  }
}

export default Post;
