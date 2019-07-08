import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import { getMessage } from './actions';
import rootReducer from './reducers';
import app from './app';
// import getContext from './components/forms/Context';


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

let randomName;


if (!(cookies.get('username'))) {
  randomName = faker.name.findName();
  cookies.set('username', randomName);
}

// const MyContext = React.createContext();

const initialValue = {
  messages: {
    message: [...gon.messages],
    status: null,
    links: {
      postMessageLink: '/api/v1/channels/1/messages',
    },
  },
  // channels: gon.channels,
};


/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialValue, composeEnhancers(applyMiddleware(thunk)));

/* eslint-enable */
const socket = io();
socket.on('newMessage', (text) => {
  store.dispatch(getMessage(text.data.attributes));
});

const username = cookies.get('username');

app(store, username);
