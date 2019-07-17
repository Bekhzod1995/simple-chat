import { createAction } from 'redux-actions';
import axios from 'axios';

export const getChannel = createAction('CHANNEL_GET');
export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILED');
export const createChannel = ({ channelName }) => async (dispatch) => {
  dispatch(createChannelRequest());
  try {
    await axios.post('/api/v1/channels', {
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

export const openModal = createAction('MODAL_OPEN');
export const closeModal = createAction('MODAL_CLOSE');