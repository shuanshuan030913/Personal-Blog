import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './../container/homeContainer';
import Edit from './../container/editContainer';
import Post from './../container/postContainer';

import ActiveLink from './activeLink';
import About from './about';
import NoMatch from './noMatch';

import './../../scss/style.scss';

//basename="/React-blog"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideToggle: false,
    };
  }

  componentDidMount = () => {
    this.props.onAuthStateChanged();
    this.props.getAuthState();
  }

  handleAsideToggie = () => {
    const { asideToggle } = this.state;
    this.setState({
      asideToggle: !asideToggle,
    });
  }

  handleAsideInit = () => {
    const { asideToggle } = this.state;
    this.setState({
      asideToggle: false,
    });
  }

  handleSignIn = () => {
    this.props.signIn();
  }

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    const { asideToggle, signIn, authState } = this.state;
    const { isSignIn } = this.props;

    return (
      <Router>
        <header className="header">
          <nav className="nav">
            <button
              type="button"
              className="logo btn"
              onClick={this.handleAsideToggie}
            >
              點我一下嘛 😆
            </button>
            <ul className="link__group">
              <li>
                <ActiveLink activeExact={true} to="/" iconClass="fas fa-home" />
              </li>
              <li>
                <a href="https://github.com/shuanshuan030913/portfolio/tree/master" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:skypainter59768@gmail.com" target="_blank">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <button className="btn login tooltip" onClick={isSignIn ? this.handleSignOut : this.handleSignIn}>
                  <i className={isSignIn ? "fas fa-sign-out-alt" : "fas fa-user-circle"}></i>
                  <span className="tooltiptext">{isSignIn ? "Sign Out" : "Sign In"}</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
          <Route exact path="/about" render={() => <About
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
          <Route path="/blog/:id" render={props => <Post {...props}
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
          <Route exact path="/edit" render={props => <Edit {...props}
            key="new"
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
          <Route exact path="/edit/:id" render={props => <Edit {...props}
            key="update"
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
          <Route render={() => <NoMatch
            asideToggle={asideToggle}
            handleAsideInit={this.handleAsideInit}
            />}
          />
        </Switch>
      </Router>
    )
  }

}

export default App;
