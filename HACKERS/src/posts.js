import React, { Component } from 'react';
import Url from './url'
import { Button } from 'primereact/button'
import Axios from 'axios';

class Posts extends Component {

    state = {
        isValid: false
    }

    componentDidMount = async () => {
        const good = await Axios.post(`${Url}/validateSub`, { subject: this.props.match.params.postSub })

        if (good.data.message) {
            this.setState({ isValid: true }) 
        } else {
            // do nothing
        }
    }

    render() {
        return (
            <>
                {this.state.isValid ?

                    <center style={{ backgroundColor: "lightgreen" }}>
                        <h1>Subject: {this.props.match.params.postSub}</h1>
                        <Button label="Debug!" className="p-button-success" onClick={() => window.location = `/debug/${this.props.match.params.postSub}`} />
                    </center>

                    : <center style={{ backgroundColor: "lightgreen" }}>
                        <h1>404 not found</h1>
                    </center>

                }

            </>
        );
    }
}

export default Posts;