import React from 'react';

class DevicePageHeader extends React.Component {
    render() {
        return (
            <header className="device-page-header">
                <div className="navbar-logo-container">
                    <a
                        href={this.props.currentDevice.manualUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src="/images/logo.jpg" className="navbar-logo" alt="ableton logo" />
                    </a>
                    <span> reference: {this.props.currentDevice.name.toLowerCase()}</span>

                </div>
                <nav>
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="https://www.jakeschlaerth.com">About</a></li>
                        <li><a href="https://www.ableton.com/en/manual/welcome-to-live/">Manual</a></li>
                        <li><a href="mailto: jakeschlaerth1999@gmail.com">Email</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default DevicePageHeader;