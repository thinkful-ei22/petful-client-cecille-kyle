import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

import { sampleDog, sampleCat } from './samplePets';
import store from './store';

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
