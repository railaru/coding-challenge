import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function tick() {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  setInterval(tick, 500);