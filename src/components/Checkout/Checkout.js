import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';


class Checkout extends Component {

    render() {
        return (
            
          
            // JIMS PIZZA PHOTO IN HERE AND EVERYWHERE
            
            <div>
                
                <h1>Checkout</h1>
            <p>
                {this.props.reduxState.customerInfoReducer.name}
            </p>
            <p>
                {this.props.reduxState.customerInfoReducer.address}
            </p>
            <p>
                {this.props.reduxState.customerInfoReducer.city} {this.props.reduxState.customerInfoReducer.zip}
            </p>
            <p>
                {this.props.reduxState.customerInfoReducer.type}
            </p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.reduxState.checkoutReducer.map( (pizza, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {pizza.name}
                                    </td>
                                    <td>
                                        {pizza.price}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Checkout);

