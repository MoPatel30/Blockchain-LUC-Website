import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';
import { App } from './appC/App.jsx';
import * as serviceWorker from './serviceWorker';


//all rendering comps for about page

ReactDOM.render(<App />, document.getElementById("aboutMain"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();