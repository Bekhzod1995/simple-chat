import { createAction } from 'redux-actions';
import axios from 'axios';
import cookies from 'js-cookie';

export const removeMessage = createAction('MESSAGE_REMOVE');
export const getMessage = createAction('MESSAGE_GET');

export const postMessage = createAction(
  'MESSAGE_POST',
  (body) => {
    axios.post('/api/v1/channels/1/messages', {
      data: {
        attributes: {
          message: body.text,
          username: cookies.get('username'),
        },
      },
    })
      .then(response => console.log('This is post: ', response.data.data.attributes.message));
    return [{ message: body.text, username: cookies.get('username') }];
  },
);
