import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {
        const id = this.props.match.params.contactID

        console.log(id)
    }
    
    render() {
        return (
            <center style={{ backgroundColor: "lightgreen" }}>
                <h1>Contact</h1>
            </center>
        );
    }
}
 
export default Contact;