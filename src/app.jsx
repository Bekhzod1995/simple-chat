import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

const rootElement = document.getElementById('chat');

const app = (store) => {
  ReactDOM.render(
    <Provider store={store}><List /></Provider>,
    rootElement,
  );
};

export default app;
