import React from 'react';
import Home from './components/home/Home';
import Detail from './components/home/Detail';
import {
    Switch,
    Route
} from 'react-router-dom';



const routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/detail" component={Detail}/>
    </Switch>
);

export default routes;
