import React, { Component } from 'react';

class HeartGroup extends Component {
  constructor(props) {
    super(props);
  }

  arrayRemove = (arr, value) => {
    return arr.filter(e => e !== value);
  }

  handleLove = () => {
    const { toggleHeart, uid, firePost, id } = this.props;

    if (uid === '') {
      alert('必須登入才能按讚呦 ≧▽≦')
      return;
    }
    let newArr = [];

    // 如果沒有人按讚
    if (firePost.heartCount === undefined) {
      newArr = [];
      newArr.push(uid);

      // 如果 user 沒按過讚
    } else if (firePost.heartCount && !firePost.heartCount.includes(uid)) {
      newArr = firePost.heartCount;
      newArr.push(uid);

      // 如果按過讚
    } else {
      newArr = this.arrayRemove(firePost.heartCount, uid);
    }
    toggleHeart(id, firePost, newArr);

  }

  render() {
    const { firePost, uid } = this.props;
    let love = false;
    let loveCount = 0;

    if (firePost.heartCount) {
      love = firePost.heartCount.includes(uid);
      loveCount = firePost.heartCount.length;
    }

    return (
      <div className={love ? "heart__group active" : "heart__group"}>
        <button className="btn heart" onClick={this.handleLove} title="Like it?">
          <i className={love ? "fas fa-heart" : "far fa-heart"} />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
          <span className="shining" />
        </button>
        <span className="count">{loveCount}</span>
      </div>
    )
  };
}

export default HeartGroup;
