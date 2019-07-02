import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const messages = handleActions({
  [actions.getMessage](state, body) {
    const { message } = state;
    const { payload } = body;
    return {
      ...state,
      message: [...message, payload],
    };
  },
  [actions.postMessageRequest](state) {
    return { ...state, status: 'pending' };
  },
  [actions.postMessageSuccess](state, body) {
    const { message } = state;
    const { payload } = body;
    return {
      ...state,
      status: 'received',
      message: [...message, payload],
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
