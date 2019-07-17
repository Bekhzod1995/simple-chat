import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ModalWrapper from './ModalWrapper';
import FormCreateChannel from './forms/channelForm';
// import * as actionCreators from '../actions/channels';

// const mapStateToProps = state => ({
//   temp: state,
// });

// @connect(null, actionCreators)
// @ModalWrapper
class ChannelOperations extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <FormCreateChannel />
        {/* <button type="button">Rename</button> */}
        {/* <button type="button">Delete</button> */}
      </div>
    );
  }
}

export default ChannelOperations;
