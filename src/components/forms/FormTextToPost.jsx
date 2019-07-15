import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import * as actionCreators from '../../actions';
import Form from './InputText';
import getUsername from '../UserNameContainer';


const mapStateToProps = state => ({
  messageStatus: state.messagesHandler.status,
  postMessageLink: state.messagesHandler.links.postMessageLink,
});

@connect(mapStateToProps, actionCreators)
class FormPage extends Component {
  submit = (values) => {
    const { userName, postMessage, postMessageLink } = this.props;
    postMessage({ ...values, userName }, postMessageLink);
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
