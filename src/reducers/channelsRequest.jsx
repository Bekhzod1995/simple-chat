import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelRequestHandler = handleActions({
  [actions.createChannelRequest](state) {
    return { channelStatus: 'pending' };
  },
  [actions.createChannelSuccess](state) {
    return { channelStatus: 'received' };
  },
  [actions.createChannelFailure](state) {
    return { channelStatus: 'failed' };
  },
  [actions.renameChannelRequest](state) {
    return { channelStatus: 'pending' };
  },
  [actions.renameChannelSuccess](state) {
    return { channelStatus: 'received' };
  },
  [actions.renameChannelFailure](state) {
    return { channelStatus: 'failed' };
  },
  // [actions.deleteChannelRequest](state) {
  //   return { ...state, channelStatus: 'pending' };
  // },
  // [actions.deleteChannelSuccess](state) {
  //   return { ...state, channelStatus: 'received' };
  // },
  // [actions.deleteChannelFailure](state) {
  //   return { ...state, channelStatus: 'failed' };
  // },
}, {
  channelRequestHandler: {
    channelStatus: '',
  },
});

export default channelRequestHandler;
