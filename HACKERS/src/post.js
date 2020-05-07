import React, { Component } from 'react';
import {Button} from 'primereact/button'
import Url from './url'
const axios = require('axios')

class Post extends Component {

    state = {
        text: "",
        subject: "",
    }

    postQ = async () => {
        const postSuccess = await axios.post(`${Url}/postQ`, { token: localStorage.getItem("token"), code: this.state.text, subject: this.state.subject })
        console.log(postSuccess)
        if (postSuccess.data.message === true) {
            alert("Sucess!")
        } else if(postSuccess.data.message === "1") {
            alert("Not logged in")
        } else if(!postSuccess.data.message) {
            alert("That subject is already taken. either you can click ok and go to that subject's awnser, or press cancel and choose a diffrent subject name")
        }
    }

    render() { 
        return (
            <center style={{ backgroundColor: "lightgreen" }}>
                <h1>Post Your Question</h1>

                <br />
                <br />

                <input placeholder="Subject" type="text" id="subject" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />

                <br />
                <br />

                <textarea placeholder="code" cols="40" style={{ height: '320px' }} value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />

                <br/>
                <br/>

                <Button label="Post" onClick={this.postQ} />
            </center>
        );
    }
}
 
export default Post;