import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.displayChannels](state) {
    return { ...state };
  },
}, {
  channelHandler: {
    channels: [],
  },
});

export default channelHandler;
