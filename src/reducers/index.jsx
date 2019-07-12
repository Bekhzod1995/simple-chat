import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const messages = handleActions({
  [actions.getMessage](state, { payload }) {
    const { messageArchive } = state;
    return {
      ...state,
      messageArchive: [...messageArchive, payload],
    };
  },
  [actions.postMessageRequest](state) {
    return { ...state, status: 'pending' };
  },
  [actions.postMessageSuccess](state, { payload }) {
    const { messageArchive } = state;
    return {
      ...state,
      status: 'received',
      messageArchive: [...messageArchive, payload],
    };
  },
  [actions.postMessageFailure](state) {
    return { ...state, status: 'failed' };
  },
}, {
  messages: {
    messageArchive: [],
    status: null,
    // links: {
    //   postMessageLink: '/api/v1/channels/1/messages',
    // },
  },
});

export default combineReducers({
  messages,
  form: formReducer,
});
