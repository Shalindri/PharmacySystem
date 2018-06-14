import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Issue from './Issue';
import View from './components/viewDrugs';
import Pres from './components/viewPres';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Issue />, document.getElementById('root'));
registerServiceWorker();
