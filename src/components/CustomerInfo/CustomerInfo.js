import React, { Component } from 'react';

// Redux stuff
import { connect } from 'react-redux';

class CustomerInfo extends Component {

    render() {
        return (
            <div>
                <h1>Hello from CustomerInfo</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(CustomerInfo);