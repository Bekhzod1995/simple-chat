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
    return { ...state, createModalVisibility: true, modalFor: 'CreatingChannel' };
  },
  [actions.closeModal](state) {
    return { ...state, createModalVisibility: false, renameModalVisibility: false };
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
    console.log('THis is payload form removeChannel', payload);
    return { ...state, removedChannelIds: [...removedChannelIds, payload] };
  },
  [actions.openRenameModal](state, { payload }) {
    return {
      ...state,
      renameModalVisibility: true,
      modalFor: 'RenamingChannel',
      renameChannelId: payload,
    };
  },
  [actions.getRenamedChannel](state, { payload }) {
    const { renamedChannels, renamedChannelsIds } = state;
    const { id } = payload;
    console.log('THis is payload form renamedChannels', renamedChannels);
    return {
      ...state,
      renamedChannels: [...renamedChannels, payload],
      renamedChannelsIds: [...renamedChannelsIds, id],
    };
  },
}, {
  channelHandler: {
    channels: [],
  },
});

export default channelHandler;
