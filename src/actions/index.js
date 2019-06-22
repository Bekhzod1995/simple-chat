import { createAction } from 'redux-actions';

export const postMessage = createAction('MESSAGE_POST');
export const removeMessage = createAction('MESSAGE_REMOVE');
export const getMessage = createAction('MESSAGE_GET');
