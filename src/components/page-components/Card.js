import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.device.name}</h2>
                <a href={`/device/${this.props.device.key}`}>
                    <img
                        src={`/images/${this.props.device.key}.png`}
                        alt="device"
                        className="card-device-image"
                    />
                </a>
                <div className="card-details">

                    <p>
                        {this.props.device.blurb}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card;