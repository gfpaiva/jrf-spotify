import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css/normalize.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
