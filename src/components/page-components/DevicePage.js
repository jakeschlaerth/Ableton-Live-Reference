import React from 'react';

import ManualExcerpt from '../ManualExcerpt'

import '../stylesheets/DevicePage.css';



class DevicePage extends React.Component {
    imgUrl = require(`../stylesheets/images/${this.props.location.state.currentDevice.id}-background.jpg`)
    render() {
        return (
            <div
            className="device-page-container"
            style= {{ backgroundImage: `url(${this.imgUrl})`}}
            >
                <ManualExcerpt
                    id={this.props.match.params.deviceId}
                    currentDevice={this.props.location.state.currentDevice}
                />
            </div>

        )
    }
}

export default DevicePage;