import React from 'react';
import { connect } from 'react-redux';
import { handleSignIn, handleSignOut, handleAuthState, handleGetAuthState } from '../actions';
import App from '../component/App';

const AppContainer = props => (<App {...props} />);

const mapStateToProps = state => ({
  isSignIn:  state.user.isSignIn,
});

const mapDispatchToProps = dispatch => ({
  signIn: () => {
    dispatch(handleSignIn());
  },
  signOut: () => {
    dispatch(handleSignOut());
  },
  onAuthStateChanged: () => {
    dispatch(handleAuthState());
  },
  getAuthState: () => {
    dispatch(handleGetAuthState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);