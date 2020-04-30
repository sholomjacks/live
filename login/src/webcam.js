import React from 'react'
import {Growl} from 'primereact/growl'
const axios = require('axios')
import url from './url.js'
var isError

const body = {
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2hvbG9tIiwicGFzc3dvcmQiOiJqYWNrcyJ9LCJpYXQiOjE1ODcxNjAyMzl9.O-soF0d2zQFNyspMRSZw0tcgsSD_4hkTwgNCx-L2DZ4"
}

class Webcam extends React.Component {
    render() {


        const handleNotifications = async () => {
            alert("Starting...")
            const notifications = await axios.post(`${url}api/notifications`, body)
                .catch(err => {isError=true;console.error(err)})
            !isError ? alert("Got notifications...") : alert("Error in getting notifications")
            console.log(notifications.data)
            this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
        }
        return(
            <>
                <Growl ref={(el) => this.growl = el} />
                <div className="p-col-12 p-md-3">
                    <button onClick={this.test} label="Success" className="p-button-success" />
                </div>
                <img
                src="https://cdn0.iconfinder.com/data/icons/basic-universal-1/30/Basic-86-512.png"
                alt="Notifications"
                style={{float: "right"}}
                width="50"
                className="p-button-success"
                onClick={handleNotifications}
                />
            </>
        )
    }
}

export default Webcam