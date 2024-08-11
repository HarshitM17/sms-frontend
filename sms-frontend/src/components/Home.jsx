// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div style={{ position: 'relative', height: '100vh', padding: '20px' }}>
            <button 
                onClick={handleLoginRedirect} 
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Login
            </button>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
};

export default Home;
