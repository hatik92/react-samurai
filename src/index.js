import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import store from './Redux/store';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

let renderEntireTree = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  )
}
// console.log(store);
// renderEntireTree(store.getState())
renderEntireTree();
store.subscribe(renderEntireTree)