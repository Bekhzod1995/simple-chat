import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  messageArchive: state.messages.messageArchive,
  temp: state,

});

@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const { messageArchive } = this.props;
    return (
      <Container style={{ border: '1px solid #1890ff', height: '75vh', overflow: 'auto' }}>
        {messageArchive.map(message => (
          message.message !== undefined
            ? <p key={message.id}>{`${message.username} : ${message.message}`}</p>
            : ''))}
      </Container>
    );
  }
}

export default ChatView;
