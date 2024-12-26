import React from 'react';
import { Link } from 'react-router-dom';
import './SelectAuthPage.css';

const SelectAuthPage = () => {
    return (
        <div className="select-auth-page">
            <h1>DG PAY </h1>
            <div>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default SelectAuthPage;