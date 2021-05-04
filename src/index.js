import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';


render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);