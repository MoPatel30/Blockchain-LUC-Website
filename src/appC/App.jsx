import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import "../about.css"
import {About} from "../aboutC/aboutC.jsx";
import {Education} from "../educationC/educationC.jsx";
import {Home} from "../educationC/educationC.jsx";


//import { render } from '@testing-library/react';

//import logo from './logo.svg';
//import './App.css';

//#BD4141


export class App extends React.Component {
  render(){
    return (
      <div id="header-style" className = "App">
        <h1 style = {{ color: 'whitesmoke', fontFamily: 'Open Sans Condensed', textAlign: "left", fontSize: '4rem'}}><i><b> Blockchain@<b style = {{color: 'yellow'}}>LUC</b></b></i></h1>
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


export class ButtonsEducation extends React.Component{
  constructor(){
    super()
    this.state = { showMessage: false }
  
  }
  operation(){
    this.setState ({showMessage: !this.state.showMessage})
  }

  
  render() {
    return (
      <div>
      
        {
        this.state.showMessage && 
        <div>
         <h1 style = {{fontSize: "100px"}}> HELLO EDUCATION</h1>    
        </div>
        
        }

        <nav>
          <button onClick={()=>this.operation()} id = "education-button">Education</button>  
        </nav>
      </div>
    )
  }
}


export class ButtonsAbout extends React.Component{
  constructor(){
    super()
    this.state = { showMessage: false }
  
  }
  operation(){
    this.setState ({showMessage: !this.state.showMessage})
  }

  
  render() {
    return (
      <div>
      
      {
        this.state.showMessage && 
        <div>
         <h1 style = {{fontSize: "100px"}}> HELLO ABOUT</h1>    
        </div>
        
        }
        <nav>    
          
          <button onClick={()=>this.operation()} id = "about-button">About</button>
      
        </nav>
      </div>
    )
  }
}

  

export class ButtonsHome extends React.Component{
  constructor(){
    super()
    this.state = { showMessage: true }
  
  }
  operation(){
    this.setState ({showMessage: !this.state.showMessage})
  }

  
  render() {
    return (
      <div>
      
        {
        this.state.showMessage?
        <div>
          <HashRouter>
          <Route path="/Home" component={Home}/>
          </HashRouter>
        </div>
        :null
        }
        <nav>
          <HashRouter>
            <NavLink exact to="/Home">
              <button onClick={()=>this.operation()} id = "home-button" >Home</button>
            </NavLink>
          </HashRouter>
        </nav>
      </div>
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


