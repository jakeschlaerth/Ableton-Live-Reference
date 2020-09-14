import React from 'react';

class HeroImage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="page-name-container">
                    <h1 className="page-name">{this.props.name}</h1>
                </header>
                <img
                    src={`images/${this.props.id}.png`}
                    className="hero-image"
                    alt={this.props.id}
                    style={{ borderRadius: "12px" }} />
            </React.Fragment>
        )
    }
}

export default HeroImage;

