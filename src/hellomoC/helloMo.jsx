import React from 'react';

import "../index.css"
import {Education} from "../educationC/educationC.jsx";
import {EducationPartTwo} from "../educationC/educationC.jsx";
import {About, Adam, Jaser, Gerardo, MoPat, MoLa} from "../aboutC/aboutC.jsx";


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
export class EventsHome extends React.Component {
  render(){
    return(
      <div style = {{marginBottom: '50px'}}>
        <h1 id="section-titles" style = {{ color: '#434343', marginBottom: '50px', position: 'relative', top: '35px'}}>EVENTS</h1>
        <p style = {{fontSize: '16px', textAlign: 'center'}}> Stay tuned for more information regarding future events and meetings!</p>
      </div>
    )
  }
}

export class Test extends React.Component{
  constructor(){
    super()
    this.state = {
      adam: false,
      jaser: false,
      gerardo: false,
      mopat: false,
      mola: false

    }
  }





  showAdam(){
    if(this.state.adam === true){
      this.setState({
        adam: false,
        jaser: false,
        gerardo: false,
        mopat: false,
        mola: false
      })
      return
    }

    this.setState({
      adam: true,
      jaser: false,
      gerardo: false,
      mopat: false,
      mola: false
    })
   
  }


  showJaser(){
    if(this.state.jaser === true){
      this.setState({
        adam: false,
        jaser: false,
        gerardo: false,
        mopat: false,
        mola: false
      })
      return
    }

    this.setState({
      adam: false,
      jaser: true,
      gerardo: false,
      mopat: false,
      mola: false
    })
   
  }


  showGerardo(){
    if(this.state.gerardo === true){
      this.setState({
        adam: false,
        jaser: false,
        gerardo: false,
        mopat: false,
        mola: false
      })
      return
    }

    this.setState({
      adam: false,
      jaser: false,
      gerardo: true,
      mopat: false,
      mola: false
    })
   
  }


  showMoPat(){
    if(this.state.mopat === true){
      this.setState({
        adam: false,
        jaser: false,
        gerardo: false,
        mopat: false,
        mola: false
      })
      return
    }

    this.setState({
      adam: false,
      jaser: false,
      gerardo: false,
      mopat: true,
      mola: false
    })
   
  }

  showMoLa(){
    if(this.state.mola === true){
      this.setState({
        adam: false,
        jaser: false,
        gerardo: false,
        mopat: false,
        mola: false
      })
      return
    }

    this.setState({
      adam: false,
      jaser: false,
      gerardo: false,
      mopat: false,
      mola: true
    })
   
  }


  render(){
    return(
      <div>
        <div class="box-1">
          <div onClick ={() => this.showAdam()} class="btn btn-one">
           
            <span>President: Adam Patel</span>
            
          </div>
        </div>
        <div class="box-1">
          <div onClick ={() => this.showJaser()} class="btn btn-one">
            <span>Vice President: Jaser Sidiqui</span>
          </div>
        </div>
        <div class="box-1">
          <div onClick ={() => this.showGerardo()} class="btn btn-one">
            <span>Treasurer: Gerardo Garcia</span>
          </div>
        </div>
        <div class="box-1">
          <div onClick ={() => this.showMoPat()} class="btn btn-one">
            <span>Lead Website Developer: Mo Patel</span>
          </div>
        </div>
        <div class="box-1">
          <div onClick ={() => this.showMoLa()} class="btn btn-one">
            <span>Secretary: Mohammad Larya</span>
          </div>
        </div>

        {this.state.adam?
            <Adam/>
            :null
        }
        {this.state.jaser?
            <Jaser/>
            :null
        }
        {this.state.gerardo?
            <Gerardo/>
            :null
        }
        {this.state.mopat?
            <MoPat/>
            :null
        }
        {this.state.mola?
            <MoLa/>
            :null
        }
      </div>
    )
  }
}

export class Events extends React.Component{
  constructor(){
    super()
    this.state = {
      name : <EventsHome/>,
      home: true,
      about: false,
      education: false


    }
  }

  toggleAbout(){
    if(this.state.about === true){
      this.setState({
        education: false,
        about: false,
        home: true,
        name: <EventsHome/>
      })
      return
    }
     
    this.setState({
      about: true,
      education: false,
      home: false,
      name : <Test/>
    })

  }

  toggleEducation(){
    if(this.state.education === true){
      this.setState({
        education: false,
        about: false,
        home: true,
        name: <EventsHome/>
      })
      return
    }

    this.setState({
      education: true,
      about: false,
      home: false,
      name: <Education/>
    })
  }

  toggleHome(){

    this.setState({
      name: <EventsHome/>,
      home: true,
      about: false,
      education: false
    })
  }

  render(){
    return(
      <div>
        
        <div>
          {this.state.about?
          <p>{this.state.name}</p>
          :null
          }

          {this.state.education?
          <p>{this.state.name}</p>
          :null
          }

          {this.state.home?
          <p>{this.state.name}</p>
          :null
          }
        </div>

        <button onClick = {() => this.toggleAbout()} class = "header-nav-button" id = "about-btn">  About </button>
        <button onClick = {() => this.toggleEducation()} class = "header-nav-button"  id = "edu-btn">  Education </button>
        <button onClick = {() => this.toggleHome()} class = "header-nav-button"  id = "home-btn">  Home </button>

      </div>
    )
  }
}