import React from 'react';
import { connect } from 'react-redux';
import { handleDayToggle } from './../actions';
import ColorToggle from './../component/utils/colorToggle';

const ColorToggleContainer = props => (<ColorToggle {...props} />);

const mapStateToProps = state => ({
  nightMode: state.css.nightMode,
});

const mapDispatchToProps = dispatch => ({
  DayToggle: checked => {
    dispatch(handleDayToggle(checked));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorToggleContainer);