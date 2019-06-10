import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
// import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import gon from 'gon';
import handles from './reducers';
import app from './app';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
/* eslint-disable */
const initialValue = {
  channelsFromGon: gon,
};

const store = createStore(handles, initialValue, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* eslint-enable */

app(store);
