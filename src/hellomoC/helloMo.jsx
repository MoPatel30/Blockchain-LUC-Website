import React from 'react';


export class HelloMo1 extends React.Component{
  render(){
    return (
      <div className = "helloMo">
        <h1 style = {{color: 'whitesmoke', textAlign: 'center', fontWieght: 'lighter', whiteSpace: "pre-wrap", letterSpacing: '.2em', lineHeight: '0.9em',textTransform: 'uppercase', fontStyle: 'normal', fontFamily: 'Open Sans Condensed', fontSize: '43px', webkitFontSmoothing: 'antialiased', padding: "3em" }}> Bringing the World of Blockchain to Loyola </h1>
      </div>
    );
  }
}


export class Mission extends React.Component{
  render(){
    return(
      <div>
       <h1 style= {{textAlign: 'center', color: 'whitesmoke', fontSize: '42px', fontFamily: 'Open Sans Condensed'}}>  Who We Are</h1>
       <p style= {{textAlign: 'center', fontFamily: "Open Sans Condensed", color: 'whitesmoke', fontSize: '24px', padding: '30px', marginLeft: '100px', marginRight: '100px'}}> <b style = {{ color: 'gold'}}>Our Mission Statement:</b> Blockchain@LUC’s mission is to spread awareness of blockchain technology, its history, its continuing impact, and relevant projects. In maintaining this focus, we strive to educate members with a quality understanding of what this space offers, creating leaders who can use their knowledge to seamlessly adapt to the inevitable transition to a fully digitized world as the Information Age progresses.  </p>
      </div>
    )
  } //courier New was the old font used
}


export class Partners extends React.Component{
  render(){
    return(
      <div>
        <h1 style= {{color: 'black', fontSize: '48px', textAlign: 'center', fontFamily: 'Open Sans Condensed'}}> Sponsers & Partners </h1>
        <img src= {"https://spartanblockchain.org/img/blockchain-education-network.png"} alt = "logo" style= {{position: 'relative', height:'225px', width: '250px', left: '400px'}}></img>
      </div>
    )
  }
}


export class Events extends React.Component{
  render(){
    return(
      <div>
        <h1 style= {{color: 'whitesmoke', fontSize: '48px', textAlign: 'center', fontFamily: 'Open Sans Condensed'}}> Events </h1>    
      </div>
    )
  }
}