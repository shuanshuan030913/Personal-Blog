import React from 'react';
import { connect } from 'react-redux';
import { handleGetSearchCategorys, handleGetTags, handleGetSearchTags } from '../actions';
import Aside from '../component/aside';

const AsideContainer = props => (<Aside {...props} />);

const mapStateToProps = state => ({
  firePosts:  state.api.firePosts,
  tagList: state.api.tagList,
});

const mapDispatchToProps = dispatch => ({
  getSearchTags: () => {
    dispatch(handleGetTags());
  },
  searchCategorys: keyword => {
    dispatch(handleGetSearchCategorys(keyword));
  },
  searchTags: tags => {
    dispatch(handleGetSearchTags(tags));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideContainer);