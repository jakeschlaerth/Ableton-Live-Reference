import React from 'react';
import './stylesheets/Header.css'

import TableOfContents from './TableOfContents'

class Header extends React.Component {
    render() {
        return (
            <header className="main-page-header"> {/* /className="main-header" */}
                <h1 className="main-page-headline">rtfm</h1>
                <TableOfContents />
            </header >
        )
    }
}

export default Header