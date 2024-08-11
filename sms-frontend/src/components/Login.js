// src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <h2>School Login</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
