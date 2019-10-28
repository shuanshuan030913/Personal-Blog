import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import Disqus from 'disqus-react';

import CodeBlock from "./CodeBlock";
import ControlList from "./controlList";

import Aside from './../../container/asideContainer';
import TagList from './../utils/tagList';
import Info from './../utils/info';

const Image = ({ image }) => (
  <div className="img">
    <img src={image} />
  </div>
)

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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

  render() {
    const { history, isLoading, firePost, asideToggle, isSignIn, GetFirePost, nightMode } = this.props;
    const { id } = this.props.match.params;

    const disqusShortname = 'blog-t0sb903fqe';
    const disqusConfig = {
      url: 'https://shuanshuan030913.github.io/Personal-Blog/dist',
      identifier: id,
      title: firePost ? firePost.title : '',
    };

    return (
      <main className={nightMode ? "page night__mode" : "page"}>
        <Aside asideToggle={asideToggle} history={history} />
        <section className={asideToggle ? 'main__content active' : 'main__content'}>
          {
            isLoading
            ? <div className="cssload-loader"></div>
            : <article className="wrap card__element">
                <button type="button" className="category btn">{ firePost.category }</button>
                <h1 className="title">{ firePost.title }</h1>
                <Info post={firePost} />
                { isSignIn ? <ControlList id={id} history={history} handleDelete={this.handleDelete}/> : '' }
                <Image image={firePost.image} />
                <ReactMarkdown
                  className="markdown__content"
                  source={firePost.body}
                  escapeHtml={false}
                  renderers={{ code: CodeBlock }}
                />
                { firePost.tagArr ? <TagList tagArr={firePost.tagArr} /> : '' }
                <hr />
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
              </article>
          }
        </section>
      </main>
    );
  }
}

export default Post;
