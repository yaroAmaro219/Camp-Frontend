
import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from '../components/CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'


class Cart extends Component {

    current_order() {
        if (this.props.user.orders) {
            return this.props.user.orders.find(order => { 
                return this.props.user.current_order === order.id
            })
        }
    }

    totalPrice() {
        if (this.current_order()) {
           return <h3>Total Price: ${this.current_order().total_price}</h3>
        }
    }

    mapOverCartItems = () => {   
        if (this.current_order()) {     
        return this.current_order().order_items.map((item) => {
            return <CartItem key={item.id} history={this.props.history} item={item} />
        })
    }
    }

    handleClick = () => {
        this.props.history.push('/payment')
    }
    
    render() {  
        // const order = this.current_order()
        // debugger
        // const order_items = order.order_items
      console.log(this.props.cart)
        return (
            <div className="show-page">
                <div className="cart-section">
                    <h3>My Cart</h3>
                        {this.mapOverCartItems()}
                    <div className="cart-summary-div">
                        <div className="total-price">
                            {this.totalPrice()}
                        </div>
                        <div className="cart-next-div"><Link onClick={this.handleClick} className="checkout-button">
                             <span>Next</span><FontAwesomeIcon  icon="arrow-right"></FontAwesomeIcon>
                            </Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.current_site_user
})

export default connect(mapStateToProps)(Cart)


// import React, { Component } from 'react';

// class Cart extends Component {
//   render() {
    
//     const { cart } = this.props
//     console.log(cart)
//     const order = cart
//       &&
//       cart.map((order, index) => {
//         return (
//           <>
//             <h1>Items</h1>
//             <h1>{order.location_id}</h1>
//             <h1>{order.price}</h1>
//             <h1>{order.kids}</h1>
//             </>
//       )
//     })
//     return (
//       <div class='show-page'>
//         <h1>Cart</h1>
//         {order}
//       </div>
//     );
//   }
// }

// export default Cart;