import React, { Component } from 'react';

class Dange extends Component {

    state = {
        html: "hello"
    }

    render() {
        return (
            <center style={{ backgroundColor: "lightgreen" }}>
                <textarea value={this.state.hi} onChange={e => this.setState({ html: e.target.value })} ></textarea>
                <p>{this.state.html}</p>
            </center>
        );
    }
}

export default Dange;