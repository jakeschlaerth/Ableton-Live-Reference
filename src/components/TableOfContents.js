import React from 'react';
import './stylesheets/TableOfContents.css'

import deviceArray from '../deviceArray'

class TableOfContents extends React.Component {
    state = {
        selectedList: {}
    }
    grabNames = (device) => {
        return (
            <a href={`#${device.key}`}>
                <li>
                    {device.name}
                </li>
            </a>
        )
    }

    expandDeviceList = (e) => {
        this.setState({ selectedList: e.currentTarget.dataset.id })
        console.log(this.state)
    }


    render() {
        return (
            <div className="table-of-contents-container">
                <div className="table-of-contents-section">
                    {/* <a className="device-link" href="#device-list" onClick={this.handleClick}> */}
                    <h2 data-id="1" onClick={this.expandDeviceList}>audio effects ▲ </h2>
                    {/* </a> */}
                    <ul data-id="1" className={`table-of-contents-list ${this.state.selectedList === "1" ? "open" : "closed"}`}>
                        {deviceArray.map(this.grabNames)}
                    </ul>
                </div>
                <div className="table-of-contents-section">
                    <h2 data-id="2" onClick={this.expandDeviceList}>instruments</h2>
                    <ul data-id="2" className={`table-of-contents-list ${this.state.selectedList === "2" ? "open" : "closed"}`}>
                        {deviceArray.map(this.grabNames)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TableOfContents