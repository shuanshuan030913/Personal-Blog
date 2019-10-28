import React from 'react';
import { connect } from 'react-redux';
import { handleGetFirePost, handleDeleteFirePost, handletoggleHeart } from '../actions';
import Post from '../component/post/post';

const PostContainer = props => (<Post {...props} />);

const mapStateToProps = state => ({
  editDone:  state.api.editDone,
  isLoading:  state.api.isLoading,
  isSignIn:  state.user.isSignIn,
  firePost: state.api.firePost,
  postKey: state.api.key,
  nightMode: state.css.nightMode,
});

const mapDispatchToProps = dispatch => ({
  GetFirePost: id => {
    dispatch(handleGetFirePost(id));
  },
  deleteFirePost: id => {
    dispatch(handleDeleteFirePost(id));
  },
  toggleHeart: (id, firePost, newArr) => {
    dispatch(handletoggleHeart(id, firePost, newArr));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);