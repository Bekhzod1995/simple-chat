import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import List from './components/list';
import handles from './reducers/';
import { createStore } from 'redux';
import { loadChannels } from './actions';
// import store from './store';
// import faker from 'faker';
// import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';



if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = createStore(handles,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(loadChannels());

ReactDOM.render(<Provider store={store}><List /></Provider>, document.getElementById('chat'));