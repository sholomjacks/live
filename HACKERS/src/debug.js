import React, { Component } from 'react';
import Url from './url'
import {Button} from 'primereact/button'
const axios = require('axios')

class Debug extends Component {

    state = {
        isValid: false,
        code: ""
    }

    componentDidMount = async () => {
        const good = await axios.post(`${Url}/validateSub`, { subject: this.props.match.params.postSub })

        if (good.data.message) {
            this.setState({ isValid: true })
            const codeT = await axios.post(`${Url}/getCode`, { subject: this.props.match.params.postSub })
            this.setState({
                code: codeT.data.code
            })
        } else {
            // do nothing
        }
    }

    render() {
        return (
            <>
                {this.state.code ?
                    <>
                        <center style={{ backgroundColor: "lightgreen" }}>
                            <h1>Debug:</h1>
                            <h2>Take the code and try to find the error!</h2>
                        </center>
                        <center style={{ fontSize: "20px", backgroundColor: "lightgray" }}>
                            <p>{this.state.code}</p>
                        </center>
                        <center><Button onClick={() => window.location = `/submit/${this.props.match.params.postSub}`} label="Submit Conclusion" className="p-button-success" /></center>
                    </>
                    :
                    <center style={{ backgroundColor: "lightgreen" }}>
                        <h1>404 Page not found. Invalid Question ID</h1>
                    </center>}
            </>
        );
    }
}

export default Debug;