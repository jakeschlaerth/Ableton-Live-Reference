import React from 'react'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-container">
                <a target="_blank" rel="noopener noreferrer" href="https://www.jakeschlaerth.com/">
                    <img className="jake-picture" src="images/me.jpg" alt="me"/>
                </a>
                <h2 className="about-me-headline">about me</h2>
            </div>
        )

    }
}

export default AboutMe