import React from 'react';
import './stylesheets/TableOfContents.css'

import deviceArray from '../deviceArray'
import instrumentArray from '../instrumentArray'

class TableOfContents extends React.Component {
    state = {
        selectedList: {}
    }
    grabNames = (device) => {
        return (
            <a key={device.key} href={`#${device.key}`}>
                <li key={device.key}>
                    {device.name}
                </li>
            </a>
        )
    }

    expandDeviceList = (e) => {
        if (e.currentTarget.dataset.id === this.state.selectedList) {
            this.setState({ selectedList: "0" })
        }
        else {
            this.setState({ selectedList: e.currentTarget.dataset.id })
        }
    }


    render() {
        return (
            <div className="table-of-contents-container">
                <div className="table-of-contents-section">
                    {/* <a className="device-link" href="#device-list" onClick={this.handleClick}> */}
                    <h2 className="section-header" data-id="1" onClick={this.expandDeviceList}>audio effects</h2>
                    {/* </a> */}
                    <ul data-id="1" className={`table-of-contents-list ${this.state.selectedList === "1" ? "open" : "closed"}`}>
                        {deviceArray.map(this.grabNames)}
                    </ul>
                </div>
                <div className="table-of-contents-section">
                    <h2 className="section-header" data-id="2" onClick={this.expandDeviceList}>instruments</h2>
                    <ul data-id="2" className={`table-of-contents-list ${this.state.selectedList === "2" ? "open" : "closed"}`}>
                        {instrumentArray.map(this.grabNames)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TableOfContents