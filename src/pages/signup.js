import React from 'react';
import SignUpForm from '../components/auth/SignUpForm';

const SignUp = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">Sign Up</h2>
            <SignUpForm />
        </div>
    );
};

export default SignUp;
