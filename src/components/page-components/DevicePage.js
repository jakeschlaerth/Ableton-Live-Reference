import React from 'react';

import audioEffects from '../../audioEffects'

import DevicePageHeader from './DevicePageHeader';
import DevicePageHero from './DevicePageHero';
import DevicePageMainContent from './DevicePageMainContent';

import '../stylesheets/DevicePage.css';



class DevicePage extends React.Component {
    currentDevice = audioEffects[this.props.match.params.deviceId]
    imgUrl = require(`../stylesheets/images/${this.currentDevice.key}-background.jpg`)
    // currentDevice = this.props.location.state.currentDevice;
    currentDevice = audioEffects[this.props.match.params.deviceId]
    
    // console.log(this.props.match.params.deviceId)
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
                    <div className="card">
                        <img alt=""/>
                        <div className="card-details">
                            <p>
                                these are card details
                </p>
                        </div>
                    </div>

                    <div className="card">
                        <img alt="" />
                        <div className="card-details">
                            <p>
                                these are card details
                </p>
                        </div>
                    </div>

                    <div className="card">
                        <img alt="" />
                        <div className="card-details">
                            <p>
                                these are card details
                </p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img alt="" />
                        <div className="card-details">
                            <p>
                                these are card details
                </p>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <p> this is another paragraph</p>
                    <nav>
                        <ul className="nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Placeholder</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    <ul className="social">
                        <li>social</li>
                        <li>social</li>
                    </ul>
                </footer>

            </div>

        )
    }
}

export default DevicePage;