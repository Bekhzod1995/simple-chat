import { Provider } from 'react-redux';
import React from 'react';
import List from './components/list';


const app = store => (
  <Provider store={store}><List /></Provider>
);

export default app;
