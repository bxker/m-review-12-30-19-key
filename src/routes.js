import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Add from './Components/Add';
import Edit from './Components/Edit'

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/add" component={Add}/>
        <Route exact path="/edit/:product_id" component={Edit}/>
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>
)