import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
// import App from "./App";
import Main from './components/main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main className="body" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
