import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {Button} from 'primereact/button';

export class GrowlDemo extends Component {

    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.showCustom = this.showCustom.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    showInfo() {
        this.growl.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    showWarn() {
        this.growl.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError() {
        this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    showSticky() {
        this.growl.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showCustom() {
        const summary = <span><i className="pi pi-check" /> <strong>PrimeReact</strong></span>;
        const detail = <img alt="PrimeReact" src="showcase/resources/images/logo.png" width="80px" style={{backgroundColor: '#212121', marginLeft: '22px'}} />

        this.growl.show({severity: 'info', summary: summary, detail: detail, sticky: true });
    }

    showMultiple() {
        this.growl.show([
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]);
    }

    clear() {
        this.growl.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction growl-demo">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation p-fluid">
                    <Growl ref={(el) => this.growl = el} />

                    <h3>Severities</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showError} label="Error" className="p-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showCustom} label="Custom" className="p-button-success" />
                        </div>
                    </div>

                    <h3>Remove All</h3>
                    <Button onClick={this.clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
                </div>
            </div>
        )
    }
}

export default GrowlDemo