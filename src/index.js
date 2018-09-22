import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './aws-exports'; // aws
import Amplify from 'aws-amplify'; // aws
Amplify.configure(config); // aws

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
