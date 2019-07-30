import { createAction } from 'redux-actions';
import { message } from 'antd';
import axios from 'axios';


export const removeChannel = createAction('CHANNEL_REMOVED');
export const getCurrentChannel = createAction('CURRENT_CHANNEL_GET');
export const getChannel = createAction('CHANNEL_GET');
export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILED');
export const renameChannelRequest = createAction('CHANNEL_RENAME_REQUEST');
export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILED');
export const deleteChannelRequest = createAction('CHANNEL_DELETE_REQUEST');
export const deleteChannelSuccess = createAction('CHANNEL_DELETE_SUCCESS');
export const deleteChannelFailure = createAction('CHANNEL_DELETE_FAILED');
export const createChannel = ({ channelName }, address) => async (dispatch) => {
  dispatch(createChannelRequest());
  try {
    await axios.post(address, {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(createChannelSuccess({ channelName }));
  } catch (e) {
    dispatch(createChannelFailure());
  }
};

export const renameChannel = ({ channelName }, address) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    await axios.patch(address, {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(renameChannelSuccess({ channelName }));
  } catch (e) {
    dispatch(renameChannelFailure());
  }
};

export const openCreateModal = createAction('MODAL_CREATE_OPEN');
export const closeModal = createAction('MODAL_CREATE_CLOSE');
export const deleteChannel = address => async (dispatch) => {
  // dispatch(deleteChannelRequest());
  try {
    await axios.delete(address);
    // dispatch(deleteChannelSuccess());
    message.success('Channel was deleted successfully');
  } catch (e) {
    // dispatch(deleteChannelFailure());
    message.error('Couldn\'t delete Channel');
  }
};


export const openRenameModal = createAction('MODAL_RENAME_OPEN');
export const getRenamedChannel = createAction('RENAMED_CHANNEL_GET');
