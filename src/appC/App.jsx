import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import About from "../aboutC/aboutC.jsx";
import Education from "../educationC/educationC.jsx";

//import { render } from '@testing-library/react';

//import logo from './logo.svg';
//import './App.css';



export class App extends React.Component {
  render(){
    return (
      <div className = "App">
        <h1 style = {{color: 'whitesmoke', fontFamily: 'Open Sans Condensed', textAlign: 'left', fontSize: '48px', backgroundColor: '#BD4141', margin: "-0.1em", padding: "1em"}}><i><b> Blockchain@LUC </b></i></h1>
      </div>
    )
  }
}

export class Buttons extends React.Component {
  render(){
    return(  
      <HashRouter>
      <div>
        <nav>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/Education">Education</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
        </nav>
        
        
        <Route path="/Education" component={Education}/>
        <Route path="/About" component={About}/>
      </div>
      </HashRouter> 
    )
  }
}






/*
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>
*/


