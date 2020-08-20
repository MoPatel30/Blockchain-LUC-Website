import React from 'react';
import '../index.css';


export class App extends React.Component {
  render(){
    return (
      <div id="header-style" className = "App">
        <h1 style = {{ color: 'whitesmoke', fontFamily: 'Open Sans Condensed', textAlign: "left", fontSize: '4rem'}}><i><b> Blockchain@<b style = {{color: 'yellow'}}>LUC</b></b></i></h1>
      </div>
    )
  }
}

