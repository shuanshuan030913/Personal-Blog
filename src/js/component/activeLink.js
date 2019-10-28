import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../../scss/style.scss';
import head from '../../images/head.jpg';

const Image = ({ image }) => (
  <div className="aside__img">
    <img src={image} />
  </div>
)

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
                  <Image image={head} />
                  <i className="fas fa-info" />
                </div>
              : <i className={iconClass} />
            }
          </Link>
        </div>
      )}
    />
  );
}

export default ActiveLink;
