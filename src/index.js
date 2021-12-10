import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import store from './Redux/store';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
// console.log(store);
// renderEntireTree(store.getState())
renderEntireTree();
store.subscribe(renderEntireTree)