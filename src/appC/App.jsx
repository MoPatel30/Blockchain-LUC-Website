import React from 'react';
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

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );


const Images = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: '1200px 400px',
        backgroundPosition: 'center',
        
    }
    return (
        <div className="image-slide" style={styles}>
        </div>
    )
}

var imgUrl = ["https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale","./images/luclsc.jpg"]

export class Carousel extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            currentImageIndex: 0
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

     
    nextSlide () {
        const lastIndex = imgUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    

    render(){
      
        return(
            <div className="carousel">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />
             
              <Images url={ imgUrl[this.state.currentImageIndex] } />

                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" style={{color: 'red', size: '50px'}} />
            </div>
        )
    }

}


export default App;



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


