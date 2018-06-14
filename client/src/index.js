import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Issue from './Issue';
import View from './components/viewDrugs';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
