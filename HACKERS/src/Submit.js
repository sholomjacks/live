import React, { Component } from 'react';
import { Button } from 'primereact/button'
import Url from './url'
const axios = require('axios')

class Submit extends Component {

    state = {
        code: "",
        title: ""
    }

    render() {

        const handleClick = async () => {
            const good = await axios.post(`${Url}/submitConclusion`, {
                token: localStorage.getItem("token"),
                subject: this.props.match.params.postSub,
                submissionTitle: this.state.title,
                code: this.state.code
            })

            if (good) {
                alert("Sucess!")
            } else {
                alert("Invalid login")
            }

        }

        return (
            <center style={{ backgroundColor: "lightgreen" }}>
                <div className="Content">
                    {this.render}
                    <h1>Submit your awnser</h1>
                    <br />
                    <br />
                    <h2>Title/poblem:</h2>
                    <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    <h2>Solution:</h2>
                    <br />
                    <textarea cols="70" rows="10" value={this.state.code} onChange={(e) => this.setState({ code: e.target.value })}></textarea>

                    <br />
                    <br />

                    <Button label="Submit Conclusion" onClick={handleClick} className="p-shadow p-button-success" />
                </div>
            </center>
        );
    }
}

export default Submit;