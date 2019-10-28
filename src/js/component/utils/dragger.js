import React, { Component } from 'react';

class Dragger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resize: false,
    };
    this.tempCount = 0;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  handleTimer = () => {
    this.timerID = setTimeout(() => {
      this.setState({
        resize: false,
      })}, 3500);
  }

  resize = () => {
    this.tempCount++;
    if (this.tempCount >= 50) {
      this.tempCount = 0;
      this.setState({
        resize: true,
      });
      this.handleTimer();
    }
  }

  render() {
    const { resize } = this.state;
    return (
      <div className={resize ? "draggle fadein" : "draggle"}>
        <div className="wanker-content">
        <h1>Bingo！</h1>
          <p><b>再拖......再拖我們就交個朋友吧！</b></p>
          <p>這麼隱蔽的彩蛋都讓你發現了！</p>
          <p>happy coding~\(^___________^)/</p>
        </div>
      </div>
    );
  }
}

export default Dragger;