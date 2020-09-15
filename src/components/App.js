import React from 'react';
import Header from './Header'
import DeviceGrid from './DeviceGrid'
import InstrumentGrid from './InstrumentGrid'
import './App.css';

class App extends React.Component {
    // state = {
    //     selectedDevice : {}
    // }
    render() {
        return (
            <React.Fragment>
                <Header />
                <DeviceGrid />
                <InstrumentGrid />
            </React.Fragment>
        );
    }
}

export default App;