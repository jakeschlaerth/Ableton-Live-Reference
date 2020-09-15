import React from 'react';
import './stylesheets/Header.css'

import TableOfContents from './TableOfContents'
import AboutMe from './AboutMe'

class Header extends React.Component {
    render() {
        return (
            <header className="main-page-header"> {/* /className="main-header" */}
                <h1 className="main-page-headline">ableton</h1>
                <TableOfContents />
                <AboutMe />
            </header >
        )
    }
}

export default Header