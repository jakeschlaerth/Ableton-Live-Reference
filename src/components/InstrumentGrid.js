import React from 'react';
import './stylesheets/InstrumentGrid.css'

// temporary
import Device from './Device'
import instrumentArray from '../instrumentArray'

class InstrumentGrid extends React.Component {
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
            <ul className="instrument-list " id="instrument-list">
                <div className="section-header-container" style={{ gridArea: "section-header" }}>
                    <h2 className="section-header" >instruments</h2>
                </div>
                {instrumentArray.map(this.renderDeviceList)}
            </ul>
        )
    }
}

export default InstrumentGrid