import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ContextForUserName from './components/Context';
// import MyProvider from './context/MyProvider';
// import getUsername from './components/forms/UserNameContainer';

const rootElement = document.getElementById('chat');

const app = (store, username) => {
  ReactDOM.render(
    <Provider store={store}>
      <ContextForUserName.Provider value={username}>
        <App />
      </ContextForUserName.Provider>
    </Provider>,
    rootElement,
  );
};

export default app;

// const app = (store, MyContext, username) => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <MyContext.Provider value={{ username, MyContext }}>
//         <App context={MyContext} />
//       </MyContext.Provider>
//     </Provider>,
//     rootElement,
//   );
// };
