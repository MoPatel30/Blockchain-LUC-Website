import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HelloMo1 } from './hellomoC/helloMo.jsx';
import { App, ButtonsEducation, ButtonsAbout, ButtonsHome } from './appC/App.jsx';

import { Mission } from './hellomoC/helloMo.jsx';
import { Partners, Events } from './hellomoC/helloMo.jsx';

import * as serviceWorker from './serviceWorker';



//all rendering comps for home page
ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<HelloMo1 />, document.getElementById('hellomo'));


ReactDOM.render(<Events />, document.getElementById('events'));

ReactDOM.render(<Mission />, document.getElementById('mission'));

//ReactDOM.render(<ButtonsEducation />, document.getElementById("education-button"))

//ReactDOM.render(<ButtonsAbout />, document.getElementById("about-button"))

//ReactDOM.render(<ButtonsHome />, document.getElementById("home-button"))

ReactDOM.render(<Partners />, document.getElementById('partners'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
