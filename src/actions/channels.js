import { createAction } from 'redux-actions';
import axios from 'axios';

export const removeChannel = createAction('CHANNEL_REMOVED');
export const getCurrentChannel = createAction('CURRENT_CHANNEL_GET');
export const getChannel = createAction('CHANNEL_GET');
export const operationChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const operationChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const operationChannelFailure = createAction('CHANNEL_CREATE_FAILED');
export const createChannel = ({ channelName }) => async (dispatch) => {
  dispatch(operationChannelRequest());
  try {
    await axios.post('/api/v1/channels', {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(operationChannelSuccess({ channelName }));
  } catch (e) {
    dispatch(operationChannelFailure());
  }
};

export const openCreateModal = createAction('MODAL_CREATE_OPEN');
export const closeCreateModal = createAction('MODAL_CREATE_CLOSE');
// export const openDeleteModal = createAction('MODAL_DELETE_OPEN');
// export const closeDeleteModal = createAction('MODAL_DELETE_CLOSE');

export const deleteChannel = address => async (dispatch) => {
  dispatch(operationChannelRequest());
  try {
    await axios.delete(address);
    dispatch(operationChannelSuccess());
  } catch (e) {
    dispatch(operationChannelFailure());
  }
};
