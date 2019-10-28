import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './../container/homeContainer';
import Edit from './../container/editContainer';
import Post from './../container/postContainer';

import About from './../container/aboutContainer';
import NoMatch from './noMatch';
import Header from './header';
import ScrollToTop from './scrollToTop';
import Dragger from './utils/dragger';

import './../../scss/style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideToggle: false,
    };
  }

  componentDidMount() {
    this.props.onAuthStateChanged();
    this.props.getAuthState();
    window.addEventListener('blur', this.onBlur);
    window.addEventListener('focus', this.onFocus);
  }

  onBlur = () => {
    document.title = `I Miss You 😢`;
  }

  onFocus = () => {
    document.title = `黃萱瑄 | 個人部落格`;
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
    const { asideToggle, signIn, authState, day } = this.state;
    const { isSignIn } = this.props;

    return (
      <Router basename="/portfolio">
        <ScrollToTop>
          {/*<Dragger />*/}
          <Header
            isSignIn={isSignIn}
            handleAsideToggie={this.handleAsideToggie}
            handleSignIn={this.handleSignIn}
            handleSignOut={this.handleSignOut}
          />
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
        </ScrollToTop>
      </Router>
    )
  }

}

export default App;
