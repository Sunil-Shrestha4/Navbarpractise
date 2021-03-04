import {Route, Switch} from "react-router-dom";
import React from 'react';
import Python from "./pages/Python";

const Route = () => {
    return (
        <div>
            <switch>
                
                <Route exact path="/python">
                <Python/>
            </Route>

                
            </switch>
            
        </div>
    )
}

export default Route
