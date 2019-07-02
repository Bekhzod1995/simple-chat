import React from 'react';

const getUsername = (ContextState) => {
  const { context } = ContextState;
  return (Component) => {
    <context.Consumer>
      {
        username => <Component user={username} />
    }
    </context.Consumer>;
  };
};

export default getUsername;
