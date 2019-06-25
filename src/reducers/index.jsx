import { handleActions } from 'redux-actions';
import * as actions from '../actions';


const messages = handleActions({
  [actions.postMessage](state, payload) {
    // axios.post('/api/v1/channels/1/messages', {
    //   data: {
    //     attributes: {
    //       message: body.payload.text,
    //       username: cookies.get('username'),
    //     },
    //   },
    // })
    //   .then(response => console.log('This is post: ', response.data.data.attributes.message));
    // console.log('This is body payload text: ', body.payload.text);
    console.log('We are in postMessage, payload: ', payload);
    return [...state, payload.payload];
  },
  // [actions.getGon](state, payload) {
  //   console.log('THis is a payload from getGon', payload.payload.messages);
  //   // const { message } = payload.payload.messages;
  //   // console.log('This is a message from payload: ', message);
  //   if (payload.payload.messages !== undefined) {
  //     payload.payload.messages.map((el) => {
  //       console.log('This is usernameeeee: ', el.username);
  //       console.log('This is message: ', el.message);
  //       console.log('This is state: ', state);
  //       return [...state, `${el.username} : ${el.message}`];
  //     });
  //   }
  //   return [];
  //   // return [];
  // },
  [actions.getMessage](state, payload) {
    const { username } = payload.payload.data.attributes;
    console.log('WE are in reducer username: ', username);
    const { message } = payload.payload.data.attributes;
    console.log('WE are in reduce message: ', message);
    return [...state, { message, username }];
  },
}, []);

// export default combineReducers({
//   messages,
// });
export default messages;
