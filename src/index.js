import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();