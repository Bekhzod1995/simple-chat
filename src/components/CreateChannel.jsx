import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import CreateChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  createModalVisibility: state.channelModalHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class CreateChannel extends Component {
  render() {
    const { createModalVisibility, closeModal } = this.props;
    return (
      <Modal
        title="Create Channel: "
        visible={createModalVisibility}
        footer={null}
        onCancel={() => closeModal()}
        maskClosable
        closable
      >
        <CreateChannelForm />
      </Modal>
    );
  }
}

export default CreateChannel;
