import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

import { sampleDog, sampleCat } from './samplePets';
import store from './store';

console.log(store.getState());

ReactDOM.render(<Dashboard catToAdopt={sampleCat} dogToAdopt={sampleDog} />, document.getElementById('root'));
registerServiceWorker();
