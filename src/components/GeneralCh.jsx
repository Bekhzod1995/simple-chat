import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../forms/FormView';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  general: state.channels.channels[0].name,
});


@connect(mapStateToProps, actionCreators)
class General extends Component {
  render() {
    return <Form />;
  }
}

export default General;
