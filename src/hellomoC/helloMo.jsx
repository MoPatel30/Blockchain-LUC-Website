import React from 'react';


export class HelloMo1 extends React.Component{
  render(){
    return (
      <div className = "helloMo">
        <h1 style = {{color: 'yellow', textAlign: 'center', fontWieght: 'lighter', whiteSpace: "pre-wrap", letterSpacing: '.2em', lineHeight: '0.9em',textTransform: 'uppercase', fontStyle: 'normal', fontFamily: 'Open Sans Condensed', fontSize: '43px', webkitFontSmoothing: 'antialiased', padding: "3em" }}> Bringing the World of Blockchain to Loyola </h1>
      </div>
    );
  }
}


export class Mission extends React.Component{
  render(){
    return(
      <div>
       <h1 style= {{textAlign: 'center', color: 'whitesmoke', fontSize: '42px', fontFamily: 'Open Sans Condensed', letterSpacing: '.1em'}}>  Who We Are</h1>
       <p style= {{textAlign: 'center', fontFamily: "Open Sans Condensed", color: 'whitesmoke', fontSize: '28px', padding: '30px', marginLeft: '100px', marginRight: '100px'}}> <b style = {{ color: 'yellow'}}>Our Mission Statement:</b> Blockchain@LUC’s mission is to spread awareness of blockchain technology, its history, its continuing impact, and relevant projects. In maintaining this focus, we strive to educate members with a quality understanding of what this space offers, creating leaders who can use their knowledge to seamlessly adapt to the inevitable transition to a fully digitized world as the Information Age progresses.  </p>
      </div>
    )
  } //courier New was the old font used
}


export class Partners extends React.Component{
  render(){
    return(
      <div>
        <h1 style= {{color: '#434343', fontSize: '48px', textAlign: 'center', fontFamily: 'Open Sans Condensed', letterSpacing: '.1em'}}> Sponsers & Affiliates </h1>
        
        <img src= {"https://spartanblockchain.org/img/blockchain-education-network.png"} alt = "logo" style= {{position: 'relative', height:'225px', width: '250px', left: '175px', top: "-75px"}}></img>
        <img src= {"https://static.blockchain.wtf/wp-content/uploads/BCI_rightalign_color-512x265.png"} alt="Blockchain Institute Logo" style= {{position: 'relative', height:'265px', width: '512px', left: '250px', top: "-25px"}}></img>
        <img src= {"https://mousebelt.university/wp-content/uploads/2019/01/mousebeltUniversityLogin.png"} alt="Mousebelt University Logo" style= {{position: 'relative', height:'114.5px', width: '300px', left: '300px', top: "-100px"}}></img>
      </div>
    )
  }
}


export class Events extends React.Component{
  render(){
    return(
      <div>
        <h1 style= {{color: '#434343', fontSize: '48px', textAlign: 'center', fontFamily: 'Open Sans Condensed', letterSpacing: '.1em'}}> Events </h1> 
           
      </div>
    )
  }
}