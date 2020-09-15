import React from 'react';
import Device from './Device'
import deviceArray from '../deviceArray'

import './stylesheets/DeviceGrid.css'

class DeviceGrid extends React.Component {
    renderDeviceList = (device) => {
        return (
            <Device
                key={device.key}
                id={device.key}
                name={device.name}
                blurb={device.blurb}
                imageArray={device.imageArray}
            />
        )
    }
    render() {
        return (
            <ul className="device-list" id="device-list">
                <div className="section-header-container" style={{ gridArea: "section-header" }}>
                    <h2 className="section-header" >audio effects</h2>
                </div>
                {deviceArray.map(this.renderDeviceList)}
            </ul>
        )
    }
}

export default DeviceGrid;