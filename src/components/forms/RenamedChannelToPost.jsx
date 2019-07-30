import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './InputChannelName';
import * as actionCreators from '../../actions/channels';
import link from '../Link';


const mapStateToProps = state => ({
  channelStatus: state.channelRequestHandler.channelStatus,
  modalFor: state.channelModalHandler.modalFor,
  renameChannelId: state.channelModalHandler.renameChannelId,
});

@connect(mapStateToProps, actionCreators)
class RenameChannelForm extends Component {
  submit = async (channelName) => {
    const {
      closeModal,
      channelStatus,
      renameChannel,
      renameChannelId,
    } = this.props;

    await renameChannel(channelName, `${link}${renameChannelId}`);
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
  };

  render() {
    const { channelStatus } = this.props;
    return (
      <Form onSubmit={this.submit} channelStatus={channelStatus} />
    );
  }
}

export default RenameChannelForm;
