import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ChannelCreateOperations from './ChannelCreateOperations';
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
        <div className="d-flex justify-content-between">
          <h6>{`Channel Title: ${currentChannel.name}`}</h6>
          <div><ChannelCreateOperations /></div>
        </div>
        <Container style={{ border: '1px solid #1890ff', height: '72vh', overflow: 'auto' }}>
          {messages.map((messageArchive) => {
            if (messageArchive.message !== undefined) {
              if (messageArchive.channelId === currentChannel.id) {
                return <p key={messageArchive.id}>{`${messageArchive.username} : ${messageArchive.message}`}</p>;
              }
              return '';
            }
            return '';
          })}
        </Container>
      </Fragment>
    );
  }
}

export default ChatView;
