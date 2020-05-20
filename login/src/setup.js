import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

const typeSelectItems = [
    { label: "Informational Websites" },
    { label: "Brochure/Catalogue Style Websites" },
    { label: "E-Commerce Websites" },
    { label: "Blogs" },
    { label: "Personal Websites" },
    { label: "Social Media and Networking Websites" },
    { label: "News Websites" },
    { label: "Online Community" },
    { label: "Portfolio" }
];

const pageSelectItems = [
    { label: "1" },
    { label: "2" },
    { label: "3" }
]

class Setup extends Component {

    state = {
        domainChecked: false,
        domain: "",
        type: "",
        pages: []
    }

    render() {
        return (
            <center>
                <h1>Setup</h1>

                <label htmlFor="domain">Choose domain   </label>

                <Checkbox id="domain" tooltip="Choose domain" onChange={e => this.setState({ domainChecked: e.checked })} checked={this.state.domainChecked}></Checkbox>

                <br/>
                <br/>

                {this.state.domainChecked ? <> <InputText value={this.state.domain} placeholder="Domain" onChange={(e) => this.setState({ domain: e.target.value })} /> <br/> <br/> </> : null}

                <Dropdown value={this.state.type} options={typeSelectItems} onChange={(e) => {this.setState({ type: e.value })}} placeholder="Select a type of website"/>

                <br/>
                <br/>

                <h2>Choose the pages you would like on your website:</h2>

                <br/>

                <MultiSelect style={{ minWidth: '12em' }} filter={true} filterPlaceholder="Search" value={this.state.pages} options={pageSelectItems} placeholder="Pages" onChange={(e) => this.setState({ pages: e.value })} />

            </center>
        );
    }
}

export default Setup;