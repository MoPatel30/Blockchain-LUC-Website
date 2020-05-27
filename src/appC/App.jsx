import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../about.css"
import About from "../aboutC/aboutC.jsx";
import Education from "../educationC/educationC.jsx";
import Home from "../educationC/educationC.jsx";

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


export class ButtonsEducation extends React.Component{
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
          <Route path="/Education" component={Education}/>
          </HashRouter>
        </div>
        :null
        }
        <nav>
          <HashRouter>
            <NavLink to="/Education">
              <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '62.5px', left: '1250px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>Education</button>
            </NavLink>
          </HashRouter>
        </nav>
      </div>
    )
  }
}


export class ButtonsAbout extends React.Component{
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
          <Route path="/About" component={About}/>
          </HashRouter>
        </div>
        :null
        }
        <nav>
          <HashRouter>
            <NavLink to="/About">
              <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '62.5px', left: '1400px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>About</button>
            </NavLink>
          </HashRouter>
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
              <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '62.5px', left: '1125px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>Home</button>
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


