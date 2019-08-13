import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelRequestHandler = handleActions({
  [actions.createChannelRequest](state) {
    return { channelStatus: 'pending' };
  },
  [actions.createChannelSuccess](state) {
    return { channelStatus: 'received', modalResultVisibility: true };
  },
  [actions.createChannelFailure](state) {
    return { channelStatus: 'failed', modalResultVisibility: true };
  },
  [actions.renameChannelRequest](state) {
    return { channelStatus: 'pending' };
  },
  [actions.renameChannelSuccess](state) {
    return { channelStatus: 'received', modalResultVisibility: true };
  },
  [actions.renameChannelFailure](state) {
    return { channelStatus: 'failed', modalResultVisibility: true };
  },
  [actions.deleteChannelSuccess](state) {
    return { ...state, channelStatus: 'received', modalResultVisibility: true };
  },
  [actions.deleteChannelFailure](state) {
    return { ...state, channelStatus: 'failed', modalResultVisibility: true };
  },
  [actions.closeResultModal](state) {
    return { ...state, modalResultVisibility: false };
  },
}, {
  channelRequestHandler: {
    channelStatus: '',
  },
});

export default channelRequestHandler;
