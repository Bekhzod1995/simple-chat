import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.getChannel](state, { payload }) {
    const { channels } = state;
    console.log('This is channels in reducer: ', channels);
    return {
      ...state,
      channels: [...channels, payload],
      // channelStatus: 'received',
    };
  },
  [actions.createChannelRequest](state) {
    return { ...state, channelStatus: 'pending' };
  },
  [actions.createChannelSuccess](state) {
    return { ...state, channelStatus: 'received' };
  },
  [actions.createChannelFailure](state) {
    return { ...state, channelStatus: 'failed' };
  },
  [actions.openModal](state) {
    return { ...state, visible: true };
  },
  [actions.closeModal](state) {
    return { ...state, visible: false };
  },
}, {
  channelHandler: {
    channels: [],
    channelStatus: null,
  },
});

export default channelHandler;
