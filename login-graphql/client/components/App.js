import React from 'react'
import Header from './Header';
import { BrowserRouter as Router, Route, hashHistory, IndexRoute } from 'react-router-dom'
import LoginForm from './LoginForm';

export default ({ children }) => {
    return (
        <div className="container">
            <Header />
            cuerpo
            {children}

        </div>
    );
}