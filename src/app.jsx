import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.scss';
import './modules/todo';
import { store } from './store';
import { Counter } from './modules/counter/components';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);

window.store = store;
