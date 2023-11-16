import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">Login</h2>
            <LoginForm />
        </div>
    );
};

export default Login;
