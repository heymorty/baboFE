import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { settings } from 'rest-in-model';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { combinedReducers } from './store';
import services from './services';

settings.addEndpoint({
  name: 'api',
  value: 'http://192.168.1.106:8000/',
  default: true,
});
//settings.setHeader('Authorization', 'Token ' + localStorage.getItem('token'));

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(services);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
