import React from 'react';

import audioEffects from '../../audioEffects'

import DevicePageHeader from './DevicePageHeader';
import DevicePageHero from './DevicePageHero';
import DevicePageMainContent from './DevicePageMainContent';
import Card from './Card.js';

import '../stylesheets/DevicePage.css';



class DevicePage extends React.Component {
    renderRelatedDevices = (relatedDeviceId) => {
        return (
            <Card device={audioEffects[relatedDeviceId]} key={audioEffects[relatedDeviceId].key} />
        )
    }
    currentDevice = audioEffects[this.props.match.params.deviceId]
    imgUrl = require(`../stylesheets/images/${this.currentDevice.key}-background.jpg`)
    // currentDevice = this.props.location.state.currentDevice;
    currentDevice = audioEffects[this.props.match.params.deviceId]
    render() {
        return (
            <div
                className="device-page-container"
                style={{ backgroundImage: `url(${this.imgUrl})` }}
            >
                <DevicePageHeader currentDevice={this.currentDevice} />
                <DevicePageHero currentDevice={this.currentDevice} />
                <DevicePageMainContent currentDevice={this.currentDevice} />

                <section className="card-list">
                    {this.currentDevice.relatedDevices.map(this.renderRelatedDevices)}
                </section>
                
                <DevicePageHeader currentDevice={this.currentDevice} />

            </div>

        )
    }
}

export default DevicePage;