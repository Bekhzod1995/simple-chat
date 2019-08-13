import React, { Component } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import FormPage from './forms/FormTextToPost';
import ChatView from './ChatView';
import getUsername from './UserNameContainer';
import List from './ChannelList';

@getUsername
class App extends Component {
  render() {
    const { userName } = this.props;
    return (
      <>
        <Row>
          <Col sm={4}>
            <List />
          </Col>
          <Col sm={8}>
            <ChatView />
            <h5>{userName}</h5>
            <FormPage />
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
