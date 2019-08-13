import { createAction } from 'redux-actions';
import axios from 'axios';

export {
  removingChannel,
  openDeleteConfirmationModal,
  removeChannel,
  setCurrentChannel,
  getChannel,
  createChannel,
  renameChannel,
  deleteChannel,
  openRenameModal,
  getRenamedChannel,
  openCreateModal,
  closeModal,
  closeResultModal,
} from './channels';

export const postMessageSuccess = createAction('MESSSAGE_POST_SUCCESS');
export const removeMessage = createAction('MESSAGE_REMOVE');
export const getMessage = createAction('MESSAGE_GET');
export const postMessageRequest = createAction('MESSAGE_POST_REQUEST');
export const postMessageFailure = createAction('MESSAGE_POST_FAILED');
export const closeMessageModal = createAction('MESSAGE_MODAL_CLOSE');
export const postMessage = (userNameText, postMessageLink) => async (dispatch) => {
  dispatch(postMessageRequest());
  try {
    await axios.post(postMessageLink, {
      data: {
        attributes: {
          message: userNameText.text,
          username: userNameText.userName,
        },
      },
    });
    dispatch(postMessageSuccess(userNameText));
  } catch (e) {
    dispatch(postMessageFailure());
  }
};
