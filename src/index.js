import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import faker from 'faker';
import { reducer as formReducer } from 'redux-form';
import cookies from 'js-cookie';
import gon from 'gon';
import io from 'socket.io-client';
import { getMessage } from './actions';
import messages from './reducers';
import app from './app';


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

let randomName;

console.log('This is gon in the beginning: ', gon);

if (!(cookies.get('username'))) {
  randomName = faker.name.findName();
  cookies.set('username', randomName);
}

const MyContext = React.createContext();


const initialValue = {
  messages: gon.messages,
  // channels: gon.channels,
};

const rootReducer = combineReducers({
  messages,
  form: formReducer,
  // handle
});


/* eslint-disable */
const store = createStore(rootReducer, initialValue,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* eslint-enable */

const socket = io();
socket.on('newMessage', (text) => {
  console.log('This is text Im sending: ', text.data.attributes);
  store.dispatch(getMessage(text));
});

// getContext(MyContext);
app(store, MyContext);
