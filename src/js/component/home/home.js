import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import queryString from 'query-string';
// https://www.npmjs.com/package/query-string

import Aside from './../../container/asideContainer';
import LayoutBar from './LayoutBar';
import BlogList from './blogList';
import '../../../scss/style.scss';


const AddBtn = ({ history }) => (
  <button
    className="btn addpost tooltip"
    role="link"
    type="button"
    onClick={() => {
      history.push('/edit');
    }}
  >
    <i className="far fa-edit"></i>
    <span className="tooltiptext">Add Post</span>
  </button>
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: false,
      search: false,
      keyword: '',
    }
  }

  componentDidMount() {
    const { location, getFirePosts, handleAsideInit, searchTags, searchCategorys } = this.props;
    handleAsideInit();
    if (location.hash) {
      this.setState({
        list: true,
      });
    }

    if (location.search) {
      const searchObj = queryString.parse(location.search);
      { searchObj.category ? searchCategorys(searchObj.category) : searchTags(searchObj.tags) }
    } else {
      getFirePosts();
    }
  }

  componentDidUpdate(prevProps) {
    const { location, getFirePosts } = this.props;
    if (location !== prevProps.location && location.search === '') {
      getFirePosts();
    }
  }

  layoutToggle = key => {
    const { location } = this.props;
    this.setState({
      list: key,
    });
    this.props.history.push({
      pathname: '/',
      hash: key,
      search: (location.search ? location.search : ''),
    });
  }

  searchToggle = e => {
    if (!this.state.search) {
      this.setState({
        search: true,
      });
    } else {
      this.setState({
        search: false,
      });
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { history, isLoading, asideToggle, firePosts, isSignIn, searchCategorys, nightMode } = this.props;
    const { list, search, keyword } = this.state;

    return (
      <main className={nightMode ? "home night__mode" : "home"}>
        <Aside asideToggle={asideToggle} history={history} list={list} />
        <div className={asideToggle ? 'main__content active' : 'main__content'}>
          {
            isLoading
            ? <div className="cssload-loader"></div>
            : <section className="wrap">
                <blockquote className="blockquote">
                  <p>你在玫瑰花上所花的時間，使你的玫瑰變得重要。</p>
                </blockquote>
                <LayoutBar list={list} layoutToggle={this.layoutToggle} />
                <hr />
                <BlogList firePosts={firePosts} list={list} history={history} searchCategorys={searchCategorys}/>
              </section>
          }
          { isSignIn ? <AddBtn history={history} /> : '' }
        </div>
      </main>
    );
  }
}

export default Home;