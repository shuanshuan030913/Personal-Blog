import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../../scss/style.scss';

function ActiveLink(props) {
  const { to, activeExact, label, iconClass, img } = props;
  return (
    <Route
      path={to}
      exact={activeExact}
      children={() => (
        <div role="link">
          <Link to={to}>
            {img
              ?
                <div className="about__btn">
                  <div className="aside__img">
                    <img src="https://picsum.photos/200/200" />
                  </div>
                  <i className="fas fa-info" />
                </div>
              : <i className={iconClass}></i>
            }
          </Link>
        </div>
      )}
    />
  );
}

export default ActiveLink;
