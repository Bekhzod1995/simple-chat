import React, { Component, Fragment } from 'react';
import FormPage from './forms/FormTextToPost';
import ChatView from './ChatView';
import getUsername from './UserNameContainer';

@getUsername
class App extends Component {
  render() {
    const { userName } = this.props;
    return (
      <Fragment>
        <ChatView />
        <h5>{userName}</h5>
        <FormPage />
      </Fragment>
    );
  }
}

export default App;
