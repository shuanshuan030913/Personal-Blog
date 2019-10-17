import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetFirePost, handleUpdateFirePost, handleAddFirePost } from '../actions';
import Edit from '../component/edit';

const EditContainer = props => (<Edit {...props} />);

const mapStateToProps = state => ({
  editDone:  state.api.editDone,
  isLoading:  state.api.isLoading,
  firePost: state.api.firePost,
});

const mapDispatchToProps = dispatch => ({
  GetFirePost: id => {
    dispatch(handleGetFirePost(id));
  },
  uptFirePost: (id, newData) => {
    dispatch(handleUpdateFirePost(id, newData));
  },
  addFirePost: (newData, timestamp) => {
    dispatch(handleAddFirePost(newData, timestamp));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContainer));