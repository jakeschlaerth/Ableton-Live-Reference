import React from 'react';

class DevicePageHero extends React.Component {
    render() {
        return (
            <article>
                <section className="hero">
                    <h1>{this.props.currentDevice.name}</h1>
                    <img
                        src={`/images/${this.props.currentDevice.key}.png`}
                        className={`device-image ${this.props.currentDevice.key}-image`}
                        alt="device"
                    />
                    <p>{this.props.currentDevice.blurb}</p>
                </section>
            </article>
        )
    }
}

export default DevicePageHero;