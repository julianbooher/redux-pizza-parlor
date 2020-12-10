import React, { Component } from 'react';
import axios from 'axios';

// Redux stuff
import { connect } from 'react-redux';

class PizzaList extends Component {

state = {
    pizza: []
}

componentDidMount() { 
this.getPizza();  
}

 getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then( ( response ) => {
      console.log('back from GET:', response.data);
      this.setState({
          pizza: response.data
      })
    }).catch(( err ) => {
      console.log( err );
      alert( 'problem with GET request' );
    }) // end axios
  }// end getPizza


    render() {
        return (
            <div>
                <h1>Hello from PizzaList</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(PizzaList);