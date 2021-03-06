import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import { grabSingleSession } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  'react-bootstrap/'

class Session extends Component {
  constructor() {
    super()

    this.state = {
      edit: false,
      quantity: 1,
      add_to_cart: false
    }
  }

  componentDidMount() {
    this.props.getSession(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({quantity: event.target.value})
  }
  
  handleSubmit = event => {        
    event.preventDefault()
    // localStorage.token ?
      this.props.addToCart({ ...this.state, user: this.props.user, session: this.props.session })
      // : this.props.history.push('/login');
    // this.state.add_to_cart = true
    this.setState({add_to_cart: true})
  }
  
  handleClick = () => {
    this.props.history.push('/')
}

handleRightClick = () => {
    this.props.history.push('/cart')
}
  
addToCartConfirmation = () => {
  return this.state.add_to_cart ? 
  <div className="link-to-cart">
  <div className="cart-confirmation-div">
      <div className="added-to-cart">
          <div className="tick"><FontAwesomeIcon icon="check"/></div>
          <div className="text-added"><p>Added to Cart</p></div>
      </div>
      <div className="cart-subtotal">
          <p>Cart subtotal ( {this.state.quantity} item ): ${this.state.quantity * this.props.session.price}</p>
      </div>
      <div className="proceed-to-cart">
          <div onClick={this.handleClick} className="left">
              <FontAwesomeIcon icon="angle-double-left"/>
              <p>Continue Shopping</p>
          </div>
          <div onClick={this.handleRightClick} className="right">
              <FontAwesomeIcon icon="angle-double-right"/>
              <p>Proceed to Cart</p>
          </div>
      </div>
  </div>
</div>
  :
null;    
}
  

  render() {
    console.log(this.props.session)
    const {session, deleteSession, updateSession, handleChange, time, age, location, dates, title, price, kids, cart, addToCart} = this.props
    return (
      <div class='show-page'>
        {
          this.state.edit
            ?
            <form class='session-update' onSubmit={(e) => {
              e.preventDefault();
              updateSession(this.props.match.params.id)
            }}>
              <h2 class="session-welcome">Location</h2>
              <textArea
                class='session-input'
                placeholder={session.location}
                name='location'
                value={location}
                onChange={handleChange}
              />
                  <div class="md-form">
                  <input placeholder="Selected time" type="text" id="input_starttime" class="form-control timepicker"/>
                  <label for="input_starttime">Light version, 12hours</label>
              </div>
              <div class="md-form">
                <input placeholder="Selected time" type="text" id="input_starttime" class="form-control timepicker"/>
                <label for="input_starttime">Dark theme</label>
              </div>
              <div class="md-form mb-4 pink-textarea active-pink-textarea">
                <h2  for="form18" class="md-form mx-5 my-5"> Dates </h2>
                <input placeholder="Selected date" type="text" id="picker2" class="form-control time-date-ghost"/>
                <input placeholder="Selected date" type="text" id="picker2"  class="form-control time-date-ghost"/>
                  <textarea id="form18" class="md-textarea form-control" rows="3"></textarea>
              </div>
              <div class="md-form amber-textarea active-amber-textarea">
                <h2 class="session-welcome" for="form19"> Age </h2>
                <div>
                <label>Between</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  </select>
                </div>
                <div>
                  <label>And</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  </select>
                  </div>
              </div>
              <div class="md-form mb-4 pink-textarea active-pink-textarea-2">
                <h2 class="session-welcome" for="form17"> Time </h2>
                 <textarea id="form17" class="md-textarea form-control" rows="3"></textarea>
              </div>
              <div class="md-form amber-textarea active-amber-textarea-2">
                <h2 class="session-welcome" for="form16"> Title </h2>
                  <textarea id="form16" class="md-textarea form-control" rows="3"></textarea>
              </div>

              <h2 class="session-welcome"> Dates </h2>
              <input
                class='session-input'
                placeholder='Dates'
                name='dates'
                value={dates}
                onChange={handleChange}
              />
              <h2 class="session-welcome"> Age </h2>

              <input
                class='session-input'
                placeholder='Age'
                name='age'
                value={age}
                onChange={handleChange}
              />
              <h2 class="session-welcome"> Time </h2>
              <input
                class='session-input'
                placeholder='Time'
                name='time'
                value={time}
                onChange={handleChange}
              />
              <h2 class="session-welcome"> Title </h2>
              <input
                class='session-input'
                placeholder='Title'
                name='title'
                value={title}
                onChange={handleChange}
              />
              <h2 class="session-welcome"> Price </h2>
              <input
                class='session-input'
                placeholder='Price'
                name='price'
                value={price}
                onChange={handleChange}
              />
              <button class='submit-button'>Submit</button>
            </form>
            :
            <div class='session-page'>
              <div class='session-seperator'>
                <div class='session-left2'>
                <div>
                <h1>{session.title}</h1> 
                </div>
                  <iframe class='map' src={session.location} width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
              <div class='session-container'>
                <div class='session-info'>
                  <h2>Ages: {session.age}</h2>
                  <h2>Time: {session.time}</h2>
                    <h2> {session.dates} </h2>
                    <Form.Label>from ${session.price}</Form.Label>
                    <div className="add-to-cart-button">
                      <form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Qty:</Form.Label>
                        <Form.Control type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                        </Form.Group>
                        <Button onClick={(e) => { addToCart(session.price, session.age, session.time, session.dates, session.location, kids, session.id, session.location_id) }}type="submit" class='add-to-cart'>Add To Cart</Button>
                                    </form>
                                </div>
                    {/* <button onClick={(e) => { addToCart(session.price, session.age, session.time, session.dates, session.location, kids, session.id, session.location_id) }} class='add-to-cart'>Add to cart</button> */}
                    {/* <button onClick={(e) => {addToCart(session.id)}} class='add-to-cart'>Add to cart</button> */}
                    </div>
                </div>
                {this.addToCartConfirmation()}
              </div>
            </div>
        }
        {this.props.currentUser
          &&
          this.props.currentUser.admin
          ?
          <div>
          <button onClick={(e) => { this.setState({ edit: !this.state.edit }) }}>Edit</button>
            <button class="delete-button" onClick={() => (deleteSession(this.props.match.params.id))}><svg height="4vw" viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" /><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /></svg></button>
            </div>
          :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
  user: state.current_site_user
})

const mapDispatchToProps = dispatch => ({
  addToCart: (singleSession) => dispatch(addToCart(singleSession)),
  grabSingleSession:(session_id) => dispatch(grabSingleSession(session_id))
})

export default (Session);