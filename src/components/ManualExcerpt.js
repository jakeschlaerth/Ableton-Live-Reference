import React from 'react';

import manualObject from '../manualObject'

class ManualExcerpt extends React.Component {
    render() {
        return (
            <div className="excerpt-container">
                <header className="page-name-container">
                    <h1 className="page-name">{this.props.currentDevice.name}</h1>
                </header>
                <img
                    src={`../images/${this.props.id}.png`}
                    className="hero-image"
                    alt={this.props.id}
                    style={{ borderRadius: "12px" }}
                />
                <div className="manual-text-container">

                    {manualObject[this.props.id]}
                </div>
            </div>
        )
    }
}

export default ManualExcerpt;