import React from 'react';
import { connect } from 'react-redux';
import { handletoggleHeart } from '../actions';
import HeartGroup from '../component/utils/heartGroup';

const HeartGroupContainer = props => (<HeartGroup {...props} />);

const mapStateToProps = state => ({
  uid: state.user.uid,
});

const mapDispatchToProps = dispatch => ({
  toggleHeart: (id, firePost, newArr) => {
    dispatch(handletoggleHeart(id, firePost, newArr));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeartGroupContainer);