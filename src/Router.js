import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Orders from './components/admin/Orders';

export class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                <Route exact path="/" component={Orders}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Router
