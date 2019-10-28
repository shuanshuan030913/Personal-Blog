import React, { Component } from 'react';

class Dragger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resize: false,
      width: '',
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentDidUpdate(prevProps, prevState) {
    const { resize, width } = this.state;
    if (!resize && width && prevState.width && width !== prevState.width) {
      this.setState({
        resize: true,
      });
      this.handleTimer();
    }
  }

  handleTimer = () => {
    this.timerID = setTimeout(() => {
      this.setState({
        resize: false,
      })}, 3000);
  }

  resize = () => {
    this.setState({
      width: window.innerWidth,
    });

  }

  render() {
    const { resize, width } = this.state;
    return (
      <div className={resize ? "draggle fadein" : "draggle"}>
        <div className="wanker-content">
        <h1>Bingo！</h1>
          <p><b>再拖......再拖我們就交個朋友吧！</b></p>
          <p>這麼隱蔽的彩蛋都發現了！</p>
          <p>\(^___________^)/~ happy coding</p>
        </div>
      </div>
    );
  }
}

export default Dragger;