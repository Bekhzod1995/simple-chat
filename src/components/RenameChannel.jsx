import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import RenameChannelForm from './forms/RenamedChannelToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  renameModalVisibility: state.channelModalHandler.renameModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class RenameChannel extends Component {
  render() {
    const { renameModalVisibility, closeModal } = this.props;
    return (
      <Modal
        title="Rename Channel: "
        visible={renameModalVisibility}
        footer={null}
        onCancel={() => closeModal()}
      >
        <RenameChannelForm />
      </Modal>
    );
  }
}

export default RenameChannel;
