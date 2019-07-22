import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import * as actionCreators1 from '../../actions';
import * as actionCreators2 from '../../actions/channels';
import Form from './InputText';
import getUsername from '../UserNameContainer';


const mapStateToProps = state => ({
  messageStatus: state.messagesHandler.status,
  channel: state.channelHandler.currentChannel,
});

const mapActionCreatorsToProps = {
  ...actionCreators1,
  ...actionCreators2,
};

@connect(mapStateToProps, mapActionCreatorsToProps)
class FormPage extends Component {
  submit = (values) => {
    const {
      userName,
      postMessage,
      channel,
    } = this.props;
    postMessage({ ...values, userName }, `/api/v1/channels/${channel.id}/messages`);
  };

  render() {
    const { messageStatus } = this.props;
    if (messageStatus === 'failed') {
      notification.error({
        message: 'Message Error',
        duration: 8,
        placement: 'bottomRight',
        bottom: 50,
        description:
        'Your text-message was not delivered. Check your connection and Try Again',
      });
    }
    return (
      <Form onSubmit={this.submit} messageStatus={messageStatus} />
    );
  }
}


export default getUsername(FormPage);
