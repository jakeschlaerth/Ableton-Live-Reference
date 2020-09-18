import React from 'react';

class DevicePageMainContent extends React.Component {
    render() {
        return (
            <article className="main-content">
                <section>
                    
                    {this.props.currentDevice.mainContent}
                    
                    {/* <img 
                    src={`/images/${this.props.currentDevice.key}-decorator.png`}
                    alt="waveform"
                    className="decorator-image"
                    /> */}
                </section>
                <aside>
                    
                        {this.props.currentDevice.asideContent}
                </aside>
            </article>
        )
    }
}

export default DevicePageMainContent;