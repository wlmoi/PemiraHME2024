import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../../services/api';

const Login = ({ onLogin }) => {
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await loginUser(nim, password);
            if (success) {
                onLogin();
            } else {
                setError('Invalid NIM or Password.');
            }
        } catch (err) {
            setError('Error logging in.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Enter NIM"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
