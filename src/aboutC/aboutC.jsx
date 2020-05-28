import React from 'react';
//import ReactDOM from 'react-dom';
//import './about.css';



export class About extends React.Component {
  render(){
    return(
      <div style = {{marginBottom: "75px"}} >
        <h2 style= {{textAlign: "center",textIndent: "40px", fontSize: '32px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Club Executives</h2>
        <p style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Click on the names to learn more about each executive and their current roles/tasks</p>
        
        <ol>
          <li style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed', }} >Founder & President: Adam Patel</li>
          <li className = "aboutStuff" style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Vice President: Jaser Siddiqui</li>
          <li className = "aboutStuff" style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Treasurer: Gerardo Garcia</li>
          <li className = "aboutStuff" style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Lead Website Developer: Mohammed Patel</li>
          <li className = "aboutStuff" style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Secretary: Mohammad Larya</li>
        </ol>

        <p style= {{textAlign: 'center', fontSize: '24px', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Interested in pursuing an executive role? Email <strong>apatel56@luc.edu</strong> to get the ball rolling and see where you'll fit in best!</p>
      </div>
    )
  }
}


export default About