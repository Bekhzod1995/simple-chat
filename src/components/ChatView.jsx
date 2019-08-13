import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ChannelCreate from './ChannelCreate';
import * as actionCreators from '../actions';

const removedChannelChecking = (removedChannelIds, currentChannel, channels) => {
  if (removedChannelIds.includes(currentChannel.id)) {
    return <h3>{`Channel Title: ***${channels[0].name}***`}</h3>;
  }
  return <h3>{`Channel Title: ***${currentChannel.name}***`}</h3>;
};


const mapStateToProps = state => ({
  messages: state.messagesHandler.messages,
  currentChannel: state.channelHandler.currentChannel,
  removedChannelIds: state.channelHandler.removedChannelIds,
  channels: state.channelHandler.channels,
});

@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const {
      messages,
      currentChannel,
      removedChannelIds,
      channels,
    } = this.props;

    return (
      <>
        <div className="d-flex justify-content-between">
          {removedChannelChecking(removedChannelIds, currentChannel, channels)}
          <div><ChannelCreate /></div>
        </div>
        <Container style={{ border: '1px solid #1890ff', height: '70vh', overflow: 'auto' }}>
          {messages.map((messageArchive) => {
            if (messageArchive.channelId === currentChannel.id) {
              return <p key={messageArchive.id}>{`${messageArchive.username} : ${messageArchive.message}`}</p>;
            }
            return '';
          })}
        </Container>
      </>
    );
  }
}

export default ChatView;
