import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './InputChannelName';
import * as actionCreators from '../../actions/channels';


const mapStateToProps = state => ({
  channelStatus: state.channelHandler.channelStatus,
  modalFor: state.channelHandler.modalFor,
  renameChannelId: state.channelHandler.renameChannelId,
});

@connect(mapStateToProps, actionCreators)
class ChannelForm extends Component {
  submit = async (channelName) => {
    const {
      closeModal,
      createChannel,
      channelStatus,
      modalFor,
      renameChannel,
      renameChannelId,
    } = this.props;

    if (modalFor === 'RenamingChannel') {
      await renameChannel(channelName, `/api/v1/channels/${renameChannelId}`);
      switch (channelStatus) {
        case 'failed':
          notification.error({
            message: 'Channel Renaming Error',
            duration: 3,
            placement: 'bottomRight',
            bottom: 50,
            description:
              'Your channel was not renamed. Check your connection and Try Again',
          });
          break;
        case 'received':
          notification.success({
            message: 'Channel Renamed Successfully',
            duration: 3,
            placement: 'bottomRight',
            bottom: 50,
            description:
              'Your channel was renamed successfully',
          });
          closeModal();
          break;
        default:
      }
    }

    if (modalFor === 'CreatingChannel') {
      await createChannel(channelName, '/api/v1/channels');
      switch (channelStatus) {
        case 'failed':
          notification.error({
            message: 'Channel Creation Error',
            duration: 3,
            placement: 'bottomRight',
            bottom: 50,
            description:
              'Your channel was not created. Check your connection and Try Again',
          });
          break;
        case 'received':
          notification.success({
            message: 'Channel Created Successfully',
            duration: 3,
            placement: 'bottomRight',
            bottom: 50,
            description:
              'Your channel was created successfully',
          });
          closeModal();
          break;
        default:
      }
    }
  };

  render() {
    const { channelStatus } = this.props;
    return (
      <Form onSubmit={this.submit} channelStatus={channelStatus} />
    );
  }
}

export default ChannelForm;
