import React, { Component } from 'react';
import FormPage from './forms/FormTextToPost';
import ChatView from './layouts/ChatView';
import getUsername from './UserNameContainer';

@getUsername
class App extends Component {
  render() {
    const { userName } = this.props;
    return (
      <React.Fragment>
        <ChatView />
        <h5>{userName}</h5>
        <FormPage />
      </React.Fragment>
    );
  }
}

export default App;
