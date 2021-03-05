import React from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Navbar from '.';
import Python from '../../Pages/Python';
import Java from './Java.js';
import Services1 from './Services1'


const Services = () => {
    return (
        <div>
            <Navbar/>
    <Services1/>
            
                <Link to="/python">Python</Link>
                <Link to="/java">Java</Link>
                <Link to="/php">PHP</Link>
            
                {/* <Route exact path="/python" >
                    <Python/>
                </Route> */}
                {/* <Route path="/java" component={Java}/> */}
               
        </div>
    )
}

export default Services
