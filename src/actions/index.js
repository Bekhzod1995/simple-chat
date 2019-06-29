import { createAction } from 'redux-actions';
import axios from 'axios';

export const postMessageSuccess = createAction('MESSSAGE_POST_SUCCESS');

export const removeMessage = createAction('MESSAGE_REMOVE');
export const getMessage = createAction('MESSAGE_GET');

export const postMessageRequest = createAction('MESSAGE_POST_REQUEST');

export const postMessageFailure = createAction('MESSAGE_POST_FAILED');

export const postMessage = userAndtext => async (dispatch) => {
  dispatch(postMessageRequest());
  try {
    await axios.post('/api/v1/channels/1/messages', {
      data: {
        attributes: {
          message: userAndtext.text,
          username: userAndtext.user,
        },
      },
    })
      .then();
    dispatch(postMessageSuccess(userAndtext));
  } catch (e) {
    dispatch(postMessageFailure());
  }
};


// export const postMessage = createAction(
//   'MESSAGE_POST',
//   (body) => {
//     axios.post('/api/v1/channels/1/messages', {
//       data: {
//         attributes: {
//           message: body.text,
//           username: cookies.get('username'),
//         },
//       },
//     })
//       .then();
//     return [{ message: body.text, username: cookies.get('username') }];
//   },
// );
