import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';

class CustomerInfo extends Component {
    
    state = {
        newCustomer: {
            name: '',
            address: '',
            city: '',
            zip: '',
            type: 'pickup'

        }
    }

    addNewCustomer = (event) => {
        event.preventDefault();
        console.log('inside addNewCustomer');
    }
    
    handleChangeFor = (event, input) => {
        this.setState({
            newCustomer: {
                ...this.state.newCustomer,
                [input]: event.target.value
            },
        });
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.newCustomer)}
                <form onSubmit={this.addNewCustomer}>
                    <input required placeholder="Name"
                    value={this.state.newCustomer.name}
                    onChange={(event) => this.handleChangeFor(event, 'name')}/>
                    <input required placeholder="Street Address"
                    value={this.state.newCustomer.address}
                    onChange={(event) => this.handleChangeFor(event, 'address')}/>
                    <input required placeholder="City"
                    value={this.state.newCustomer.city}
                    onChange={(event) => this.handleChangeFor(event, 'city')}/>
                    <input required placeholder="Zip Code"
                    value={this.state.newCustomer.zip}
                    onChange={(event) => this.handleChangeFor(event, 'zip')}/>


                    <input type="radio" id="pickup" name="pickup" value="pickup" 
                        checked ={this.state.newCustomer.type === "pickup"}
                        onChange={(event) => this.handleChangeFor(event, 'type')}/>
                    <label htmlFor="pickup">Pick Up</label>
                    <input type="radio" id="delivery" name="delivery" value="delivery" 
                        checked ={this.state.newCustomer.type === "delivery"}
                        onChange={(event) => this.handleChangeFor(event, 'type')}/>
                    <label htmlFor="delivery">Delivery</label>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}



const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(CustomerInfo);