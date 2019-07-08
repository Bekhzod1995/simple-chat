import React from 'react';
import ContextForUserName from './Context';


const getUsername = (MyComponent) => {
  const AppContainer = () => (
    <ContextForUserName.Consumer>
      {username => <MyComponent userName={username} />}
    </ContextForUserName.Consumer>
  );
  return AppContainer;
};

export default getUsername;
