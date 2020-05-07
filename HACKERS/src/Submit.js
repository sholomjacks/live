import React, { Component } from 'react';

class Submit extends Component {
    render() { 
        return (
            <center style={{ backgroundColor: "lightgreen" }}>
                <h1>Submit your awnser</h1>
                <br/>
                <br/>
                <h2>Solution:</h2>
                <br/>
                <textarea cols="70" rows="10"></textarea>
            </center>
        );
    }
}
 
export default Submit;