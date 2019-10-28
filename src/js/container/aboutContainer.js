import React from 'react';
import { connect } from 'react-redux';
import About from '../component/about';

const AboutContainer = props => (<About {...props} />);

const mapStateToProps = state => ({
  nightMode: state.css.nightMode,
});


export default connect(mapStateToProps, null)(AboutContainer);