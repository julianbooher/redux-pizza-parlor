import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';


class Checkout extends Component {

    render() {
        return (
            // Render contact info to DOM using customerInfo
            // Render table of pizzas to DOM using checkoutReducer.
            // JIMS PIZZA PHOTO IN HERE AND EVERYWHERE
            <div>
                <h1>Hello from Checkout</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Checkout);