import React from 'react'

import './dropdown.css'




export class Dropdown extends React.Component {
    constructor(){
        super()

        this.state = {
            displayMenu : false
        }

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    }
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
    render() {
        return (
            <div  className="dropdown" style = {{background:"red",width:"200px"}} >
                <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
    
                { this.state.displayMenu ? (
                <ul>
                    <li><a className="active" href="#Home">Home</a></li>
                    <li><a href="#Education Courses">Education/Courses</a></li>
                    <li><a href="#Resources">Resources</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                 </ul>
                 ):
                (
                    null
                )
                }
    
           </div>
    
        );
    }
}

    
