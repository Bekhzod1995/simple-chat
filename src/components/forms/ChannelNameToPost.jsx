import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './InputChannelName';
import * as actionCreators from '../../actions/channels';
// import Form from './InputText';


const mapStateToProps = state => ({
  channelStatus: state.channelHandler.channelStatus,
  // postMessageLink: state.messagesHandler.links.postMessageLink,
});

@connect(mapStateToProps, actionCreators)
class CreateChannelForm extends Component {
  submit = async (channelName) => {
    const { closeModal, createChannel, channelStatus } = this.props;
    await createChannel(channelName);
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
  };

  render() {
    const { channelStatus, closeModal } = this.props;
    console.log('THis is channelStatus from CreateCHannelFOrm', channelStatus);
    return (
      <Form onSubmit={this.submit} channelStatus={channelStatus} />
    );
  }
}

export default CreateChannelForm;
