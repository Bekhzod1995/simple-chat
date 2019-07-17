import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.createChannelRequest](state) {
    return { ...state, status: 'pending' };
  },
  [actions.createChannelSuccess](state, body) {
    return { ...state, status: 'received' };
  },
  [actions.createChannelFailure](state) {
    return { ...state, status: 'failed' };
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
    status: null,
  },
});

export default channelHandler;
