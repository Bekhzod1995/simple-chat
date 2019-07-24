import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import ChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  RenameModalVisibility: state.channelHandler.renameModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class RenameChannel extends Component {
  render() {
    console.log('we are in RenameChannel');
    const { RenameModalVisibility, closeModal } = this.props;
    return (
      <Modal
        title="Rename Channel: "
        visible={RenameModalVisibility}
        footer={null}
        onCancel={() => closeModal()}
      >
        <ChannelForm />
      </Modal>
    );
  }
}

export default RenameChannel;
