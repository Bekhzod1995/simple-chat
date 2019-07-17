import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import FormPage from './forms/FormTextToPost';
import ChatView from './ChatView';
import getUsername from './UserNameContainer';
import List from './ChannelList';
import ChannelOperations from './ChannelOperations';

@getUsername
class App extends Component {
  render() {
    console.log('We are in App');
    const { userName } = this.props;
    return (
      <Container>
        <Row>
          <Col sm={2}>
            <List />
          </Col>
          <Col sm={8}>
            <ChatView />
            <h5>{userName}</h5>
            <FormPage />
          </Col>
          <Col sm={2}>
            <ChannelOperations />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
