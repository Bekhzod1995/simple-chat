import { createAction } from 'redux-actions';
import axios from 'axios';

export const displayChannels = createAction('CHANNEL_DISPLAY');
export const postCreate = createAction(
  axios.post('/api/v1/channels', {
    data: {
        attributes: {
            name: 
        }
    }
  })
);