import { createAction } from 'redux-actions';
import axios from 'axios';

export const postMessageSuccess = createAction('MESSSAGE_POST_SUCCESS');
export const removeMessage = createAction('MESSAGE_REMOVE');
export const getMessage = createAction('MESSAGE_GET');
export const postMessageRequest = createAction('MESSAGE_POST_REQUEST');
export const postMessageFailure = createAction('MESSAGE_POST_FAILED');
export const sendDataToServer = createAction(
  'DATA_FETCH',
  (userAndtextAndlink, postMessageLink) => axios.post(postMessageLink, {
    data: {
      attributes: {
        message: userAndtextAndlink.text,
        username: userAndtextAndlink.userName,
      },
    },
  }),
);

export const postMessage = (userAndtextAndlink, postMessageLink) => async (dispatch) => {
  dispatch(postMessageRequest());
  try {
    await dispatch(sendDataToServer(userAndtextAndlink, postMessageLink));
    dispatch(postMessageSuccess(userAndtextAndlink));
  } catch (e) {
    dispatch(postMessageFailure());
  }
};
