import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import 'antd/dist/antd.css';
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
import {
  getChannel,
  removeChannel,
  getRenamedChannel,
} from './actions/channels';
import rootReducer from './reducers';
import app from './app';


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

let randomName;


if (!(cookies.get('username'))) {
  randomName = faker.name.findName();
  cookies.set('username', randomName);
}


const initialValue = {
  messagesHandler: {
    messages: [...gon.messages],
  },
  channelHandler: {
    channels: [...gon.channels],
    currentChannel: gon.channels[0],
    removedChannelIds: [],
  },

  channelModalHandler: {
    createModalVisibility: false,
  },
};


/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialValue, composeEnhancers(applyMiddleware(thunk)));

/* eslint-enable */
const socket = io();
socket.on('newMessage', (text) => {
  store.dispatch(getMessage(text.data.attributes));
});

socket.on('newChannel', (text) => {
  store.dispatch(getChannel(text.data.attributes));
});

socket.on('removeChannel', (text) => {
  store.dispatch(removeChannel(text.data.id));
});

socket.on('renameChannel', (text) => {
  store.dispatch(getRenamedChannel(text.data.attributes));
});

const username = cookies.get('username');

app(store, username);
