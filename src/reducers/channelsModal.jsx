import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelModalHandler = handleActions({
  [actions.openCreateModal](state) {
    return { ...state, createModalVisibility: true };
  },
  [actions.closeModal](state) {
    return {
      ...state,
      createModalVisibility: false,
      renameModalVisibility: false,
      deleteModalVisibility: false,
    };
  },
  [actions.openRenameModal](state, { payload }) {
    return {
      ...state,
      renameModalVisibility: true,
      renameChannelId: payload,
    };
  },
  [actions.openDeleteConfirmationModal](state) {
    return {
      ...state,
      deleteModalVisibility: true,
    };
  },
}, {
  channelModalHandler: {
    createModalVisibility: '',
  },
});

export default channelModalHandler;
