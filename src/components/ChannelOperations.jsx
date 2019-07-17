import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ModalWrapper from './ModalWrapper';
// import CreateChannel from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';
import CreateChannel from './CreateChannel';

const mapStateToProps = state => ({
  visible: state.channelHandler.visible,
});

@connect(mapStateToProps, actionCreators)
class ChannelOperations extends Component {
  handleClick = () => {
    const { openModal } = this.props;
    openModal();
  }

  render() {
    const { visible } = this.props;
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <button type="button" onClick={this.handleClick}>Create</button>
        {visible ? <CreateChannel /> : null}
        <button type="button">Rename</button>
        <button type="button">Delete</button>
      </div>
    );
  }
}

export default ChannelOperations;
