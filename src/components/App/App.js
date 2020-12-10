import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';

// Redux stuff
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Router>
        <Route path="/" component={PizzaList}/>
        {/* <Route path="/customerInfo" component={CustomerInfo}/> */}
        {/* <Route path="/checkout" component={Checkout}/> */}
        {/* <Route path="/admin" component={Admin}/> */}
        </Router>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(App);