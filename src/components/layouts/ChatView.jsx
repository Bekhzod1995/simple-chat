import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import cookies from 'js-cookie';
import io from 'socket.io-client';
import gon from 'gon';
import * as actionCreators from '../../actions';

const mapStateToProps = state => ({
  // data: state,
  data: state,
});


@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const socket = io();
    socket.on('newMessage', (data) => {
      console.log('THis is data whhich I receive: ', data.data.attributes);
      const { getMessage } = this.props;
      getMessage(data.data.attributes);
    });
    return (
      <Card style={{ width: '40rem', height: '30rem' }}>
        <Card.Body>
          { console.log('This is state: ', this.props.data) }
          { cookies.get('username') }
          {/* {arr.map(el => <p key={el.id}>{ el.message }</p>)} */}
        </Card.Body>
      </Card>
    );
  }
}

export default ChatView;
