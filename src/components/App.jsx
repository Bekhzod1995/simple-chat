import React, { Component } from 'react';
// import gon from 'gon';
import FormPage from './forms/ReceivedValue';
import ChatView from './layouts/ChatView';


class App extends Component {
  render() {
    const { context } = this.props;
    return (
      <React.Fragment>
        <ChatView />
        <context.Consumer>
          {
            username => (
              <p>{username}</p>
            )
          }
        </context.Consumer>
        <FormPage />
      </React.Fragment>
    );
  }
}

export default App;
