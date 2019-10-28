
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Aside from './../container/asideContainer';
import '../../scss/style.scss';

const NoMatch = (props) => {

  useEffect(() => {
    props.handleAsideInit();
  },[]);

  return (
    <div className="nomatch">
      <Aside asideToggle={props.asideToggle} history={props.history}/>
      <main className={props.asideToggle ? 'main__content active' : 'main__content'}>
        <section className="wrap">
          <h2 className="sub__title">
            404 page
          </h2>
        </section>
      </main>
    </div>
  )
}

export default withRouter(NoMatch);