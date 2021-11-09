import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import FourOFour from "../views/404";
import Home from "../views/Home"

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route>
                        <FourOFour/>
                    </Route>
                </Switch>
            </Router>
        )
    }    
}