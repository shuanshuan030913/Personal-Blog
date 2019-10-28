import React, { Component } from 'react';
import HeartGroup from './../../container/heartGroupContainer';
import Time from './time';

const Info = ({ post }) => (
  <div className="post__info">
    <Time date={post.date} />
    <HeartGroup firePost={post} id={post.date} />
  </div>
)

export default Info;