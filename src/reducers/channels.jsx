import { handleActions } from 'redux-actions';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.getCurrentChannel](state, { payload }) {
    if (state.removedChannelIds.includes(payload.id)) {
      console.log('This is true');
    }
    return { ...state, currentChannel: payload };
  },
  [actions.removeChannel](state, { payload }) {
    const { removedChannelIds } = state;
    return {
      ...state,
      removedChannelIds: [...removedChannelIds, payload],
    };
  },
  [actions.getChannel](state, { payload }) {
    const { channels } = state;
    return {
      ...state,
      channels: [...channels, payload],
    };
  },
  [actions.getRenamedChannel](state, { payload }) {
    const messages = state.channels.map((channel) => {
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
