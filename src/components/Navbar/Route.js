import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import React from 'react';
import Navbar from '.';
import Services from './Services';
import Python from './Python';
import Java from './Java';
import PHP from './PHP';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/" exact>
                        <Navbar/>
                    </Route>
                    <Route path="/services" exact>
                        <Services/>
                    </Route>
                    <Route path="/python" exact>
                        <Python/>
                    </Route>
                    <Route path="/java" exact>
                        <Java/>
                        
                    </Route>
                    <Route path="/php" exact>
                        <PHP/>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default Routes
