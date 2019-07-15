import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  messages: state.messagesHandler.messages,
  currentChannel: state.channelHandler.currentChannel,

});

@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const { messages, currentChannel } = this.props;
    return (
      <Fragment>
        <h4>{`Channel Title: ${currentChannel}`}</h4>
        <Container style={{ border: '1px solid #1890ff', height: '75vh', overflow: 'auto' }}>
          {messages.map(message => (
            message.message !== undefined
              ? <p key={message.id}>{`${message.username} : ${message.message}`}</p>
              : ''))}
        </Container>
      </Fragment>
    );
  }
}

export default ChatView;
