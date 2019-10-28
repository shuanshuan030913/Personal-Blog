import React, { Component } from 'react';

import ActiveLink from './activeLink';

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getSearchTags } = this.props;
    getSearchTags();
  }

  handleCategory = e => {
    const { searchCategorys, history, list } = this.props;
    searchCategorys(e.target.value);
    history.push({
      pathname: '/',
      search: `?category=${e.target.value}`,
      hash: (list ? 'list' : ''),
    })
  }
  handleTags = e => {
    const { searchTags, history, list } = this.props;
    searchTags(e.target.value);
    history.push({
      pathname: '/',
      search: `?tags=${e.target.value}`,
      hash: (list ? 'list' : ''),
    })
  }

  render() {
    const { asideToggle, history, tagList } = this.props;
    const category = ["Front-End", "Travel", "Music", "Jotting"];

    return (
      <aside className={asideToggle ? 'aside active' : 'aside'}>
        <div className="theme__sm">INFO</div>
        <ActiveLink activeExact={true} to="/about" img="true"/>
        <h3 className="title">Hi, I'm Sena</h3>
        <div className="content">
          <p>雜食性，倉鼠症</p>
          <p>技能點起源之處。</p>
        </div>
        <div className="theme">CATEGORIES</div>
        <ul className="aside__list">
          {category.map(e => (
            <li key={e}><button className="btn list" value={e} onClick={this.handleCategory}>{e}</button></li>
          ))}
        </ul>
        <div className="theme">TAGS</div>
        <ul className="aside__list tag">
          { tagList
            ? tagList.map(e => (
              <li key={e}><button className="btn tag" value={e} onClick={this.handleTags}>{e}</button></li>
            ))
            : 'Here is no any tags !'
          }
        </ul>
      </aside>
    )
  }
}
export default Aside;