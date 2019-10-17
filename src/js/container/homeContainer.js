import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetFirePosts, handleGetSearchCategorys, handleGetSearchTags } from '../actions';
import Home from '../component/home/home';

const HomeContainer = props => (<Home {...props} />);

const mapStateToProps = state => ({
  isLoading:  state.api.isLoading,
  isSignIn:  state.user.isSignIn,
  firePosts: state.api.firePosts,
});

const mapDispatchToProps = dispatch => ({
  getFirePosts: () => {
    dispatch(handleGetFirePosts());
  },
  searchCategorys: keyword => {
    dispatch(handleGetSearchCategorys(keyword));
  },
  searchTags: tags => {
    dispatch(handleGetSearchTags(tags));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));