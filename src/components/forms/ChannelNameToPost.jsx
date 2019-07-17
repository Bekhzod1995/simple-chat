import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './InputChannelName';
import * as actionCreators from '../../actions/channels';
// import Form from './InputText';


// const mapStateToProps = state => ({
//   messageStatus: state.messagesHandler.status,
//   postMessageLink: state.messagesHandler.links.postMessageLink,
// });

@connect(null, actionCreators)
class CreateChannelForm extends Component {
  submit = (channelName) => {
    const { closeModal, createChannel } = this.props;
    createChannel(channelName);
    notification.success({
      message: 'Channel Success',
      duration: 3,
      placement: 'bottomRight',
      bottom: 50,
      description:
          'Channel was created successfully',
    });
    closeModal();
  };

  render() {
    // const { messageStatus } = this.props;
    // if (messageStatus === 'failed') {
    //   notification.error({
    //     message: 'Message Error',
    //     duration: 8,
    //     placement: 'bottomRight',
    //     bottom: 50,
    //     description:
    //     'Your text-message was not delivered. Check your connection and Try Again',
    //   });
    // }
    return (
      <Form onSubmit={this.submit} />
    );
  }
}

export default CreateChannelForm;
