import React from 'react'
import Header from './Header';

export default ({ children }) => {
    return (
        <div className="container">
            <Header />
            <h3>Login</h3>
            {children}
        </div>
    );
}