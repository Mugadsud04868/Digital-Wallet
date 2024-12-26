import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;