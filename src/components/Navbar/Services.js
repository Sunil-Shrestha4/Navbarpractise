import React from 'react'
import Python from './Python';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Java from './Java.js';

const Services = () => {
    return (
        <div>
    
            <Router>
                <Link to="/python">Python</Link>
                <Link to="/java">Java</Link>
                <Link to="/.net">.Net</Link>
                <Route path="/python" component={Python}/>
                <Route path="/java" component={Java}/>
            </Router>
        </div>
    )
}

export default Services
