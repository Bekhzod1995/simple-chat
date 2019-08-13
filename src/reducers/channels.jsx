import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions/channels';

const channelHandler = handleActions({
  [actions.setCurrentChannel](state, { payload }) {
    if (state.removedChannelIds.includes(payload.id)) {
      console.log('This is true');
    }
    return { ...state, currentChannel: payload };
  },
  [actions.removeChannel](state, { payload }) {
    const arrayWithoutRenamedChannels = _.remove(
      state.channels,
      (channel) => {
        if (channel.id === payload) {
          return '';
        }
        return channel;
      },
    );
    console.log('this channels after deletion: ', arrayWithoutRenamedChannels);
    return {
      ...state,
      channels: [...arrayWithoutRenamedChannels],
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
  [actions.removingChannel](state, payload) {
    return {
      ...state,
      removingChannelName: payload.payload.channelName,
      removingChannelId: payload.payload.id,
    };
  },
}, {
  channelHandler: {
    channels: [],
  },
});

export default channelHandler;
