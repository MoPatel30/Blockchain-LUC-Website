import React from 'react';
//import ReactDOM from 'react-dom';
import '../about.css';



export class About extends React.Component {

  operation(){

  }
  render(){
    return(
      <div style = {{marginBottom: "175px",position: 'relative', top: '100px'}} >
        <h2 style= {{textAlign: "center", fontSize: '3rem', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Club Executives</h2>
        <p style= {{textAlign: 'center', fontSize: '2rem', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Click on the names to learn more about each executive and their current roles/tasks</p>
        
        <ul>
          <li id= "name-style" onClick ={() => this.operation()} >Founder & President: Adam Patel</li>
          <li id= "name-style">Vice President: Jaser Siddiqui</li>
          <li id= "name-style">Treasurer: Gerardo Garcia</li>
          <li id= "name-style">Lead Website Developer: Mohammed Patel</li>
          <li id= "name-style">Secretary: Mohammad Larya</li>
        </ul>

        <p style= {{textAlign: 'center', fontSize: '2rem', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Interested in pursuing an executive role? Email <strong>apatel56@luc.edu</strong> to get the ball rolling and see where you'll fit in best!</p>
      </div>
    )
  }
}


export default About