import React, { Component } from 'react';
import axios from 'axios';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

// Redux stuff
import { connect } from 'react-redux';

class PizzaList extends Component {

state = {
    pizzaPie: []
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
          pizzaPie: response.data
      })
    }).catch(( err ) => {
      console.log( err );
      alert( 'problem with GET request' );
    }) // end axios
  }// end getPizza


render(){
    console.log(this.state)
    return(
        <div>
        {this.state.pizzaPie.map((pizza, i) => {
            return(
                <PizzaListItem key={i} pizza={pizza}/>
            )
        })}
        </div>
    )
}
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(PizzaList);