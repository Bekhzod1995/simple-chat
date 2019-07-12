// import { handleActions } from 'redux-actions';
// import * as actions from '../actions';

// const view = handleActions({
//   [actions.getMessage](state, body) {
//     const { messageArchive } = state;
//     const { payload } = body;
//     return {
//       ...state,
//       messageArchive: [...messageArchive, payload],
//     };
//   },
//   [actions.postMessageRequest](state) {
//     return { ...state, status: 'pending' };
//   },
//   [actions.postMessageSuccess](state, body) {
//     const { messageArchive } = state;
//     const { payload } = body;
//     return {
//       ...state,
//       status: 'received',
//       messageArchive: [...messageArchive, payload],
//     };
//   },
//   [actions.postMessageFailure](state) {
//     return { ...state, status: 'failed' };
//   },
// }, {
//   messages: {
//     messageArchive: [],
//     status: null,
//     // links: {
//     //   postMessageLink: '/api/v1/channels/1/messages',
//     // },
//   },
// });

// export default view;
