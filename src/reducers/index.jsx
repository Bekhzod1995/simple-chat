import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const messages = handleActions({
  [actions.postMessage]() {
  },
  [actions.getMessage](state, body) {
    return {
      ...state,
      message: [...state.message, body.payload],
    };
  },
  [actions.postMessageRequest](state) {
    return { ...state, status: 'pending' };
  },
  [actions.postMessageSuccess](state, body) {
    return {
      ...state,
      status: 'received',
      message: [...state.message, body.payload],
    };
  },
  [actions.postMessageFailure](state) {
    return { ...state, status: 'failed' };
  },
}, {
  messages: {
    message: [],
    status: null,
  },
});

export default combineReducers({
  messages,
  form: formReducer,
});
