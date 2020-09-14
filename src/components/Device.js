import React from 'react';
import { withRouter } from 'react-router-dom'
import './stylesheets/Device.css';

class Device extends React.Component {
    goToDevicePage = (e) => {
        e.preventDefault();
        const currentDevice = {
            id: this.props.id,
            name: this.props.name,
            imageArray: this.props.imageArray,
            
        }
        this.props.history.push({pathname: `/device/${this.props.id}`, state: {currentDevice: currentDevice}});
        window.scrollTo(0, 0);
        // set state to clicked device
        

    }
    renderImages = (imageUrl, name, id) => {
        return (
            <a 
            href={`./device/${id}`} 
            onClick={this.goToDevicePage}
            key={imageUrl}>
                <img
                    src={imageUrl}
                    alt={name}
                    className={`device-image ${id}-image`}
                />
            </a>
        )
    }

    // const currentDevice = this.props

    render() {
        return (
            <React.Fragment>
                <li
                    key={this.props.id}
                    id={this.props.id}
                    className={`device-container ${this.props.id}-container`}
                    style={{ gridArea: this.props.id }}
                >
                    <h2 className="device-name">{this.props.name}</h2>
                    {this.props.imageArray.map(x => this.renderImages(x, this.props.name, this.props.id))}
                    {/* <img
                    src={this.props.image}
                    alt={this.props.name}
                    className={`device-image ${this.props.id}-image`}
                /> */}
                    <div className="blurb-container">
                        <p className="blurb-paragraph">
                            {this.props.blurb}
                        </p>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

export default withRouter(Device);