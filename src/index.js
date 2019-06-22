import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
// import axios from 'axios';
// import io from 'socket.io-client';
import { reducer as formReducer } from 'redux-form';
import messages from './reducers';
import app from './app';


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable */
// const initialValue = {
//   channels: gon,
// };
  // console.log('Gon: ', gon);

  let randomName;

  console.log('This is gon in the beginning: ', gon);


if(!(cookies.get('username'))){
  randomName = faker.name.findName();
  cookies.set('username', randomName);
}

const MyContext = React.createContext();

const rootReducer = combineReducers({
  messages,
  form: formReducer,
  
  // handle
});

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* eslint-enable */

// getContext(MyContext);
app(store, MyContext);
