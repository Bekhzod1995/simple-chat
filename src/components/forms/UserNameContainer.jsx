import React from 'react';
import ContextForUserName from './Context';

const getUsername = () => {
  const enhance = (
    WrappedComponent => (
      <ContextForUserName.Consumer>
        {
          username => <WrappedComponent user={username} />
        }
      </ContextForUserName.Consumer>));
  return enhance;
};

export default getUsername;
