import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';

class PizzaListItem extends Component {

    state = {
        selected: false
    }

addPizza = () => {
    console.log('addPizza button working', this.props.pizza);
    this.props.dispatch({type: 'ADD_PIZZA', payload: this.props.pizza})
    this.setState({
        selected: true
    })
}

removePizza = () => {
    console.log('removePizza button working', this.props.pizza);
    this.props.dispatch({type: 'REMOVE_PIZZA', payload: this.props.pizza.id})
    this.setState({
        selected: false
    })
}


    render() {
        return (
            <div>
                <p>{this.props.pizza.name}</p>
                <img alt={this.props.pizza.name} src={this.props.pizza.image_path}/>
                <p>{this.props.pizza.description}</p>
                <p>{this.props.pizza.price}</p>
                {this.state.selected ?
                    <button onClick={this.removePizza}>REMOVE</button> :
                    <button onClick={this.addPizza}>ADD</button>
                }
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(PizzaListItem);