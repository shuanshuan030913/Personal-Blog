import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
  }

  getDay = timestamp => {
    const t = new Date(timestamp);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MM = (t.getMonth() + 1 < 10 ? '0' : '') + (t.getMonth() + 1);
    const dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    const ww = weekday[t.getDay()];
    const h = (t.getHours() < 10 ? '0' : '') + t.getHours();
    const m = (t.getMinutes() < 10 ? '0' : '') + t.getMinutes();
    const date = `${t.getFullYear()}/${MM}/${dd} (${ww}) ${h}:${m}`;
    return date;
  }

  render() {
    const { date } = this.props;
    return(
      <div className="time">
        <i className="far fa-clock"></i>
        {this.getDay(date)}
      </div>
    )
  }
}

export default Time;