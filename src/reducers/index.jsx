import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import channelHandler from './channels';
import * as actions from '../actions';
import channelRequestHandler from './channelsRequest';
import channelModalHandler from './channelsModal';


const messagesHandler = handleActions({
  [actions.getMessage](state, { payload }) {
    const { messages } = state;
    return {
      ...state,
      messages: [...messages, payload],
    };
  },
  [actions.postMessageRequest](state) {
    return { ...state, status: 'pending' };
  },
  [actions.postMessageSuccess](state, { payload }) {
    const { messages } = state;
    return {
      status: 'received',
      messages: [...messages, payload],
    };
  },
  [actions.postMessageFailure](state) {
    return { ...state, status: 'failed' };
  },
}, {
  messagesHandler: {
    messages: [],
    status: null,
  },
});

export default combineReducers({
  messagesHandler,
  channelHandler,
  channelRequestHandler,
  channelModalHandler,
  form: formReducer,
});
