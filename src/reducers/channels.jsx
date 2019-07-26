import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
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
  [actions.getChannel](state, { payload }) {
    const { channels } = state;
    return {
      ...state,
      channels: [...channels, payload],
      // channelStatus: 'received',
    };
  },
  [actions.getRenamedChannel](state, { payload }) {
    const messages = state.channels.map((channel) => {
      console.log('This is my current state: ', state.channels);
      if (channel.id === payload.id) {
        return {
          ...payload,
        };
      }
      return {
        ...channel,
      };
    });

    return {
      ...state,
      channels: [...messages],
    };
  },
}, {
  channelHandler: {
    channels: [],
  },
});

export default channelHandler;
