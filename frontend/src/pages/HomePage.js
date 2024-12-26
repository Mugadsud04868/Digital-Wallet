import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const history = useHistory();

    const handleGetStarted = () => {
        history.push('/select-auth');
    };

    return (
        <div className="home-page">
            <h1>Welcome to the DGPay</h1>
            <p>Your one-stop solution for seamless transactions.</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default HomePage;