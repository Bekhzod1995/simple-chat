import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.getChannel](state, { payload }) {
    const { channels } = state;
    return {
      ...state,
      channels: [...channels, payload],
      // channelStatus: 'received',
    };
  },
  [actions.operationChannelRequest](state) {
    return { ...state, channelStatus: 'pending' };
  },
  [actions.operationChannelSuccess](state) {
    return { ...state, channelStatus: 'received' };
  },
  [actions.operationChannelFailure](state) {
    return { ...state, channelStatus: 'failed' };
  },
  [actions.openCreateModal](state) {
    return { ...state, createModalVisibility: true };
  },
  [actions.closeCreateModal](state) {
    return { ...state, createModalVisibility: false };
  },
  // [actions.openDeleteModal](state) {
  //   return { ...state, deleteModalVisibility: true };
  // },
  // [actions.closeDeleteModal](state) {
  //   return { ...state, deleteModalVisibility: false };
  // },
  [actions.getCurrentChannel](state, { payload }) {
    return { ...state, currentChannel: payload };
  },
  [actions.removeChannel](state, { payload }) {
    const { removedChannelIds } = state;
    return { ...state, removedChannelIds: [...removedChannelIds, payload] };
  },
}, {
  channelHandler: {
    channels: [],
  },
});

export default channelHandler;
