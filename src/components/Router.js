import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';


import DevicePage from './page-components/DevicePage';

import NotFound from "./NotFound"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/device/:deviceId" component={DevicePage} />

            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;