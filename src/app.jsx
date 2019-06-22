import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import cookies from 'js-cookie';
import App from './components/App';
// import MyProvider from './context/MyProvider';

const rootElement = document.getElementById('chat');

const app = (store, MyContext) => {
  const username = cookies.get('username');
  ReactDOM.render(
    <Provider store={store}>
      <MyContext.Provider value={username}>
        <App context={MyContext} />
      </MyContext.Provider>
    </Provider>,
    rootElement,
  );
};

export default app;
