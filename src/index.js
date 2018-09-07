import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

import { sampleDog, sampleCat } from './samplePets';

ReactDOM.render(<Dashboard catToAdopt={sampleCat} dogToAdopt={sampleDog} />, document.getElementById('root'));
registerServiceWorker();
