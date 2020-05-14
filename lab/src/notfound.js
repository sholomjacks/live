import React, { Component } from 'react';

class Notfound extends Component {
    render() {
        return (
            <center style={{ backgroundColor: "lightgreen" }} >
                <h1>404, Page Not Found</h1>
                <h2>We can't find the requested link. How about going to your HomePage <a href="/">here?</a></h2>
            </center>
        );
    }
}

export default Notfound;