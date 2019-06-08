import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import handles from './reducers/index';
import app from './app';
// import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
/* eslint-disable */
const store = createStore(handles, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* eslint-enable */


ReactDOM.render(app(store), document.getElementById('chat'));
