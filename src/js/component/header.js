import React, { Component } from 'react';
import ActiveLink from './activeLink';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleAsideToggie = () => {
    this.props.handleAsideToggie();
  }

  handleSignIn = () => {
    this.props.handleSignIn();
  }

  handleSignOut = () => {
    this.props.handleSignOut();
  }

  render() {
    const { isSignIn } = this.props;

    return (
      <header className="header">
        <nav className="nav">
          <button
            type="button"
            className="logo btn"
            onClick={this.handleAsideToggie}
          >
            點點我 😆
          </button>
          <ul className="link__group">
            <li>
              <ActiveLink activeExact={true} to="/" iconClass="fas fa-home" />
            </li>
            <li>
              <a href="https://github.com/shuanshuan030913/Personal-Blog" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/shuan-shuang" target="_blank">
                <i className="fab fa-behance" />
              </a>
            </li>
            <li>
              <a href="mailto:skypainter59768@gmail.com" target="_blank">
                <i className="fas fa-envelope" />
              </a>
            </li>
            <li>
              <button className="btn login tooltip" onClick={isSignIn ? this.handleSignOut : this.handleSignIn}>
                <i className={isSignIn ? "fas fa-sign-out-alt" : "fas fa-user-circle"} />
                <span className="tooltiptext">{isSignIn ? "Sign Out" : "Sign In"}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header;
