import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';

class PizzaListItem extends Component {

clickPizza = () => {
    console.log('Pizza button working', this.props.pizza);
    this.props.dispatch({type: 'ADD_PIZZA', payload: this.props.pizza})
    console.log('inside clickPizza', this.props.reduxState)
}

    render() {
        return (
            <div>
                <p>{this.props.pizza.name}</p>
                <img alt={this.props.pizza.name} src={this.props.pizza.image_path}/>
                <p>{this.props.pizza.description}</p>
                <p>{this.props.pizza.price}</p>
                <button onClick={this.clickPizza}>ADD</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(PizzaListItem);