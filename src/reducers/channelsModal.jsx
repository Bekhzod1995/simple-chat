import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelModalHandler = handleActions({
  [actions.openCreateModal](state) {
    return { ...state, createModalVisibility: true};
  },
  [actions.closeModal](state) {
    return {
      ...state,
      createModalVisibility: false,
      renameModalVisibility: false,
    };
  },
  [actions.openRenameModal](state, { payload }) {
    return {
      ...state,
      renameModalVisibility: true,
      renameChannelId: payload,
    };
  },
}, {
  channelModalHandler: {
    createModalVisibility: '',
  },
});

export default channelModalHandler;
