import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { initSentry } from './api/error';
import FullStory from '@fullstorydev/browser';

FullStory.init({ orgId: '<your org id here>' });

initSentry({ dsn: 'https://<your Sentry key>@sentry.io/<your Sentry project>' });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
