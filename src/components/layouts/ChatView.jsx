import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

const mapStateToProps = state => ({
  messageArchive: state.messages.message,

});

@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const { messageArchive } = this.props;
    return (
      <Container style={{ border: '1px solid #17a2b8', height: '80vh', overflow: 'auto' }}>
        {messageArchive.map((el) => {
          if (el.message !== undefined) {
            return <p key={el.id}>{`${el.username} : ${el.message}`}</p>;
          }
          return '';
        })}
      </Container>
    );
  }
}

export default ChatView;
