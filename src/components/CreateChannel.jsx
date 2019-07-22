import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import CreateChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  createModalVisibility: state.channelHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class CreateChannel extends Component {
  render() {
    const { createModalVisibility } = this.props;
    return (
      <Modal
        title="Create Channel: "
        visible={createModalVisibility}
        footer={null}
      >
        <CreateChannelForm />
      </Modal>
    );
  }
}

export default CreateChannel;
