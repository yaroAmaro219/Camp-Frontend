import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import insta from '../images/instagram1.svg'
import Totally from '../images/Totally Tennis Logo.png'
import { DropdownButton, Dropdown, NavDropdown} from 'react-bootstrap'
// import Modal from '../services/Modal'
import Google from '../services/GoogleBtn'
import Tennis from '../images/Tennis-Ball-Download-Free-PNG.png'
import {Modal, Nav, DropdownItem } from 'react-bootstrap'


export default class Nav1 extends Component {
  constructor() {
    super()
    this.state = {
      sign: false,
      login: false,
      show: false,
      register: false,
      isOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  user() {
    var id = this.props.currentUser
      ?
      this.props.currentUser.id
      :
      null
    return ([id])
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  showModalRegister = e => {
    this.setState({
      show: !this.state.register
    });
  };

//   onOpenModal = () => {
//     this.setState({ sign: true });
// };

// onOpenModalLogin = () => {
//     this.setState({ login: true });
// };

// onCloseModal = () => {
//     this.setState({ sign: false });
// };

// onCloseModalclose = () => {
//     this.setState({ login: false });
// };

  render() {
    const {handleLogout} = this.props
    return (
      <div class='nav'>
   
          <div class='nav-text'>
          <a href='/'>
            <img class='ball' src={Totally} />
          </a>
        <div class='link-container'>
          {/* <a class='link' href='/enrolls'>Enroll</a> */}
          <div class='dropdown'>
              <a class='link' href='/locations'>Find A Class
              </a>
            <div class='dropdown-content'>
                  <div class='dropdown-column'>
                    <div class='dropdown-columns'>
               <div class='dropdown-column1'>
                <a href='#'>New York</a>
                    <a href='/consulting'>New Jersey</a>
                      <a href='/consulting'>California</a>
                      </div>
                 
                    <div class='dropdown-column2'>
                    <a href='#'>Arizona</a>
                    <a href='/consulting'>Florida</a>
                      <a href='/consulting'>South Carolina</a>
                      </div>
                      <div class='dropdown-column2'>
                    <a href='#'>North Carolina</a>
                    <a href='/consulting'>Utah</a>
                      <a href='/consulting'>Oregon</a>
                      </div>
                      <div class='dropdown-column2'>
                    <a href='#'>Idaho</a>
                    <a href='/consulting'>Hawaii</a>
                      <a href='/consulting'>Connecticut</a>
                      </div>
                      <div class='dropdown-column2'>
                    <a href='#'>Georgia</a>
                    <a href='/consulting'>Arkansas</a>
                      <a href='/consulting'>Texas</a>
                    </div>
                    </div>
                  </div>
                  </div>
          </div>
              {/* <a class='link' href='/camps'>Camps</a> */}
                <div class='dropdown'>
                  <a class='link' href='/private'>Privates</a>
                  <div class='dropdown-content-mini'>
                  <div class='dropdown-column'>
                      <a href='/private'>Private</a>
                      <a href='/semi-private'>Semi Private</a>
                      <a href='/private-groups'>Private Group</a>
                    </div>
              </div>  
              </div>
              <div class='dropdown'>
                <a class='link' href='/coaches'>Courses</a>
                <div class='dropdown-content-mini'>
                  <div class='dropdown-column'>
                   
                    <a href='/certificate'>TT Certification</a>
                    <a href='/fundamentals'>Fundamentals</a>
                      <a href='/fundamentals'>Mental Conditioning</a>
                     
                  </div>
                </div>
                </div>
                <div class='dropdown'>
                  <a class='link' href='/about'>About</a>
                  <div class='dropdown-content-mini'>
                    <div class='dropdown-column'>
                    <a href='/coaches'>Team</a>
                    <a href='/about'>Mission</a>
                    <a href='/community'>Community</a>
                  </div>
                </div>
              </div>
              <div class='dropdown'>
              <a class='link' href='/contact'>Contact</a>
              <div class='dropdown-content-mini'>
                    <div class='dropdown-column'>
                    <a href='/reviews'>Reviews</a>
                    <a href='/questions'>Questions</a>
                    <a href='/careers'>Careers</a>
                  </div>
                </div>
              </div>
              <a class='link' id='cart' href='/cart'>Cart (0)</a>
     
              {this.props.currentUser
                ?
                <div>
                    {this.user().map(user => (
                       <div class='dropdown'>
                    <a class="link" href={`/users/${user}`}>
                    <svg width="18" viewBox="0 0 16 18">
                      <path class='head' d="M8 0C9.06087 0 10.0783 0.464774 10.8284 1.29208C11.5786 2.11938 12 3.24144 12 4.41143C12 5.58141 11.5786 6.70347 10.8284 7.53078C10.0783 8.35808 9.06087 8.82285 8 8.82285C6.93913 8.82285 5.92172 8.35808 5.17157 7.53078C4.42143 6.70347 4 5.58141 4 4.41143C4 3.24144 4.42143 2.11938 5.17157 1.29208C5.92172 0.464774 6.93913 0 8 0ZM8 11.0286C12.42 11.0286 16 13.0027 16 15.44V17.6457H0V15.44C0 13.0027 3.58 11.0286 8 11.0286Z" fill="black" />
                      </svg>
                      <p class='name'>{this.props.currentUser.first_name}</p>
                        </a>
                        <div class='dropdown-content-mini'>
                  <div class='dropdown-column'>
                            <a  href={`/users/${user}`}>Profile</a>
                            <a href='/private'>Public</a>
                            <a onClick={handleLogout}>Logout</a>
                          </div>
                          </div>
                    </div>))}
                  </div>
                :

                <a class='link' href='/login'>Login</a>
                }
               
              </div>
         
            </div>
            <div class="hamburger">
             <input type="checkbox" id="nav-toggle"/>
             <label for="nav-toggle">
              <span class="toggle-words"><i class="fa fa-bars" id="bar"><svg viewBox="0 0 120 60" width="40" height="30">
                <rect width="100" height="9"></rect>
                <rect y="30" width="100" height="9"></rect>
                <rect y="60" width="100" height="9"></rect>
              </svg></i></span>
             </label>
            <div class="menu">
              <ul>
                 <li>
                {this.props.currentUser
                ?
                <div class='profile-link'>
                  {this.user().map(user => (
                    <a class="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false} href={`/users/${user}`}>
                    <svg width="18" viewBox="0 0 16 18">
                      <path d="M8 0C9.06087 0 10.0783 0.464774 10.8284 1.29208C11.5786 2.11938 12 3.24144 12 4.41143C12 5.58141 11.5786 6.70347 10.8284 7.53078C10.0783 8.35808 9.06087 8.82285 8 8.82285C6.93913 8.82285 5.92172 8.35808 5.17157 7.53078C4.42143 6.70347 4 5.58141 4 4.41143C4 3.24144 4.42143 2.11938 5.17157 1.29208C5.92172 0.464774 6.93913 0 8 0ZM8 11.0286C12.42 11.0286 16 13.0027 16 15.44V17.6457H0V15.44C0 13.0027 3.58 11.0286 8 11.0286Z" fill="white" />
                      </svg>
                      <p class='name'>{this.props.currentUser.first_name}</p>
                    </a>
                    ))}
                  </div>
                :
                <a class='nav-link' href='/login'>Login</a>
                }</li>
            <li><a href="/enrolls" class="nav-link"
                  onClick={() => document.getElementById("nav-toggle").checked = false}>Enroll</a></li>
                <li><a href="/locations" class="nav-link"
                  onClick={() => document.getElementById("nav-toggle").checked = false}>Find a class</a></li>
                <li><a href="/coaches" class="nav-link"
                  onClick={() => document.getElementById("nav-toggle").checked = false}>Team</a></li>
                <li><a href="/contact" class="nav-link"
                  onClick={() => document.getElementById("nav-toggle").checked = false}>Contact</a></li> 
              </ul>
              <div class='web-dev'>
                  <h4>Made with ♡ by <a class='web-a' href='https://www.glasstop.io/'>Glass Top Web Developers</a></h4>
              </div>
              <div class='nav-social'>
                <a class='social' href='https://www.instagram.com/totallytennis.io/' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
                  <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/TennisNYC'><svg width="35" height="25" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a></div>
      </div>
      </div>
        
      
        {/* <Modal onClose={this.showModal} show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome To Tennis Coaches of NYC</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form class='sign-in-form'>
            <input class='sign-in-input' placeholder='Email'></input>
              <input class='sign-in-input' placeholder='Password' type='password'></input>
              <button>Sign In</button>
              <Google />
          </form>
          </Modal.Body>
          <Modal.Footer>
          <div class='signin-options'>
              <a href='#'>Forgot password?</a>
                <a href='#' onClick={this.showModalRegister}>Create account</a>
                </div>
          </Modal.Footer>
          <div class='modal-container'>
          </div>
          </Modal>
          <Modal onClose={this.showModal} show={this.state.register}>
          <div class='modal-container'>
          <form class='sign-in-form'>

            <input class='sign-in-input' placeholder='Email'></input>
              <input class='sign-in-input' placeholder='Password' type='password'></input>
              <button>Sign In</button>
   
              <Google />
            
             <a href='#'>Create account</a>
            
          </form>
         
          </div>
          </Modal> */}
        </div>
    )
  }
}
