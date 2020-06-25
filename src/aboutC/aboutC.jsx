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
          <li id= "name-style">Lead Website Developer: Mo Patel</li>
          <li id= "name-style">Secretary: Mohammad Larya</li>
        </ul>

        <p style= {{textAlign: 'center', fontSize: '2rem', color: '#434343', fontFamily: 'Open Sans Condensed'}}>Interested in pursuing an executive role? Email <strong>apatel56@luc.edu</strong> to get the ball rolling and see where you'll fit in best!</p>
      </div>
    )
  }
}



export class Adam extends React.Component{
  render(){
    return(
      <div id = "adam">
        <h1 id = "exec_title">President</h1>

        <p id = "exec_desc">Adam Patel is currently an intern for Token Daily – an early stage crypto venture fund that focuses on investing in crypto startups along with spreading awareness of news in the crypto/blockchain space – while also studying computer science and data science. Adam has been heavily involved in the crypto/blockchain space for a few years now. His freshman year he set out to find Loyola’s Blockchain Club when he was majoring in Accounting and Finance. Since then, he has made his efforts into a reality with launching Blockchain@LUC, while also connecting Loyola to many different institutions across the nation as well as changing his academic path. Aside from focusing heavily in the crypto/blockchain space, Adam loves to spend his free time working out, reading, engaging in insightful conversations, and travel. You can find Adam on Twitter where he is most active: @adampatel23, or email him at apatel56@luc.edu. Don’t hesitate to initiate a conversation or ask any questions – Adam is very willing to help in any way.</p>

      </div>
    )
  }
}



export class Jaser extends React.Component{
  render(){
    return(
      <div id = "jaser">
        <h1 id = "exec_title">Vice President</h1>

        <p id = "exec_desc">Jaser A. Siddiqui is a student of psychology and neuroscience who is on the premed track. While working at Lincoln Square Medical Center as a Medical Assistant, he has also helped found and run The Humanity Projects, a nonprofit organization focused on empowering orphaned kids in Haiti. Jaser is working his best to leave a lasting mark wherever he goes. Jaser was introduced to the crypto/blockchain space few years ago via his group of friends. Developing an amateur understanding of the basics and the potentials of the technology, he grew a keen interest for everything it offers. Looking to spread knowledge of the space, Jaser is aiming to use his leadership and humanitarian skills in spreading awareness while also furthering his own understanding. Aside from being a humanitarian by nature, Jaser enjoys a plethora of activities in his free time, such as engaging in meaningful debates with friends, working out, reading, watching movies and exploring new places to eat.</p>
        
      </div>
    )
  }
}


export class Gerardo extends React.Component{
  render(){
    return(
      <div id = "gerardo">
        <h1 id = "exec_title">Treasurer</h1>

        <p id = "exec_desc">Gerardo is an experienced Personnel Manager with a demonstrated history of working in the military industry. He is skilled in Research, Human Resources, Customer Service, Management, and Leadership Development. He's a strong human resources professional pursuing a Bachelor of Business Administration (BBA) with a focus on Accounting and Finance from Quinlan School of Business, Loyola University Chicago. Gerardo is currently a Masters intern for PwC Audit that is working on his credits for the CPA exam.</p>
        
      </div>
    )
  }
}



export class MoPat extends React.Component{
  render(){
    return(
      <div id = "mopat"> 
        <h1 id = "exec_title">Lead Website Developer</h1>

        <p id = "exec_desc">Mohammed Patel is currently studying Computer Science and Data Science. His passion for technology and innovation began early, due to his early exposure to technology. Mohammed was introduced to the Bitcoin and Blockchain space quite early and has become Interested in the history of Bitcoin and it’s monetary policies. In addition, he has also built and set up miners from computer parts as well as high-functioning gaming PCs. On his free time, Mohammed loves to play video games, read, and intensely critique new films. One of his favorite games of 2019 is God’s Unchained, which is a digital trading card game, mechanically similar to Hearthstone, built on the Ethereum Blockchain.</p>
      </div>
    )
  }
}



export class MoLa extends React.Component{
  render(){
    return(
      <div id = "mola">
        <h1 id = "exec_title">Secretary</h1>

        <p id = "exec_desc">Mohammad Larya is currently a computer science student at Loyola double-majoring in data science. His passion for technology was sparked at a young age by his father, a software developer. Mohammad also developed an interest in business and finance during high school. Combining these interests, Mohammad began delving into the emerging technologies of blockchain and cryptocurrency. In his free time, Mohammad’s hobbies include playing video games and working on cars. One of his favorite games is Runescape, a childhood favorite, and his dream car is a 1970 Dodge Challenger, inspired by Dom Toretto from the Fast and the Furious films.</p>
      </div>
    )
  }
}


export default About