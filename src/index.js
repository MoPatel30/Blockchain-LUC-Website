import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HelloMo1 } from './hellomoC/helloMo.jsx';
import { App, Carousel } from './appC/App.jsx';
import { Dropdown } from './dropdownC/dropdown.jsx';
import { Mission } from './hellomoC/helloMo.jsx';
import { Partners, Events } from './hellomoC/helloMo.jsx';

import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<HelloMo1 />, document.getElementById('hellomo'));

var displayDropdown = (
  <div style={{display: 'flex', justifyContent: 'center'}} >
    <Dropdown />
  </div>
);


ReactDOM.render(displayDropdown, document.getElementById('dropdown'));

ReactDOM.render(<Mission />, document.getElementById('mission'));

ReactDOM.render(<Partners />, document.getElementById('partners'));

ReactDOM.render(<Carousel />, document.getElementById('carouselPics'));

ReactDOM.render(<Events />, document.getElementById('events'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
