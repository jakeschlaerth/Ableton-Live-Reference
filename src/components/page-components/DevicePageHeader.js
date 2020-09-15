import React from 'react';

class DevicePageHeader extends React.Component {
    render() {
        return (
            <header className="device-page-header">
                <div className="navbar-logo-container">
                    <a href="https://www.ableton.com/en/manual/welcome-to-live/">
                        <img src="/images/logo.jpg" className="navbar-logo" alt="ableton logo" />
                    </a>
                    <span>rtfm on {this.props.currentDevice.name.toLowerCase()}</span>

                </div>
                <nav>
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Placeholder</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default DevicePageHeader;