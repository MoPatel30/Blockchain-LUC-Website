import React from 'react';

import "../index.css"
import {Education} from "../educationC/educationC.jsx";
import {About} from "../aboutC/aboutC.jsx";

export class HelloMo1 extends React.Component{
  render(){
    return (
      <div className = "helloMo">
        <h1 style = {{color: 'yellow', textAlign: 'center', fontWieght: 'lighter', whiteSpace: "pre-wrap", letterSpacing: '.2em', lineHeight: '1.5em',textTransform: 'uppercase', fontStyle: 'normal', fontFamily: 'Open Sans Condensed', fontSize: '3.5rem', webkitFontSmoothing: 'antialiased', padding: "3em" }}> Bringing the World of Blockchain to Loyola </h1>
      </div>
    );
  }
}


export class Mission extends React.Component{
  render(){
    return(
      <div>
       <h1 id="section-titles">  Who We Are</h1>
       <p id="mission-style"> <b style = {{ color: 'yellow'}}>Our Mission Statement:</b> Blockchain@LUC’s mission is to spread awareness of blockchain technology, its history, its continuing impact, and relevant projects. In maintaining this focus, we strive to educate members with a quality understanding of what this space offers, creating leaders who can use their knowledge to seamlessly adapt to the inevitable transition to a fully digitized world as the Information Age progresses.  </p>
      </div>
    )
  } //courier New was the old font used
}


export class Partners extends React.Component{
  render(){
    return(
      <div>
        <h1 id="section-titles" style = {{color: '#434343'}}> Sponsers & Affiliates </h1>
        
        <img src= {"https://spartanblockchain.org/img/blockchain-education-network.png"} alt = "logo" id = "ben-pic"></img>
        <img src= {"https://weteachblockchain.org/assets/img/logo.jpg"} alt="Blockchain Institute Logo" id = "bi-pic"></img>
        <img src= {"https://mousebelt.university/wp-content/uploads/2019/01/mousebeltUniversityLogin.png"} alt="Mousebelt University Logo" id = "mbu-pic"></img>
      </div>
    )
  }
}


export class Events extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "Hide"

    }
  }

  toggleAbout(){
    this.setState({
      name : <About/>
    })

  }
  toggleEducation(){
    this.setState({
      name: <Education/>
    })
  }


  render(){
    return(
      <div>
        
        <div>
          <p>{this.state.name}</p>
        </div>

        <button onClick = {() => this.toggleAbout()} class = "header-nav-button" style = {{position: 'absolute', left: '250px', top: '475px'}}>  About </button>
        <button onClick = {() => this.toggleEducation()} class = "header-nav-button"  style = {{position: 'absolute', left: '1000px', top: '475px'}}>  Education </button>
           
      </div>
    )
  }
}