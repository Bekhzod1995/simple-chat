import { handleActions } from 'redux-actions';
import axios from 'axios';
import { combineReducers } from 'redux';
// import gon from 'gon';
// import cookies from 'js-cookie';
import * as actions from '../actions';

const messages = handleActions({
  [actions.postMessage](state, body) {
    axios.post('/api/v1/channels/1/messages', {
      data: {
        attributes: {
          message: body.payload.text,
        },
      },
    })
      .then(response => console.log('This is a response from Posting Message', response));
    return [state];
  },
  [actions.getMessage](state, payload) {
    return [...state, payload];
  },
}, []);

export default combineReducers({
  messages,
});
