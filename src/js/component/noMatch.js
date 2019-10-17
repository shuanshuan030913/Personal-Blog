
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Aside from './../container/asideContainer';
import '../../scss/style.scss';

class NoMatch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.handleAsideInit();
  }

  render() {
    const { history, asideToggle } = this.props;

    return (
      <main className={asideToggle ? 'main page active' : 'main page'}>
        <Aside asideToggle={asideToggle} history={history}/>
        <section className="wrap">
          <h2 className="sub__title">
            404 page
          </h2>
        </section>
      </main>
    )
  }
}

export default withRouter(NoMatch);