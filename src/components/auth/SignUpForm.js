import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ onSuccessfulSignup }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState([]);
    const { fullName, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors([]); // Clear errors when user starts typing
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setErrors([{ msg: 'Passwords do not match' }]);
            return;
        }
        try {
            const res = await axios.post('/api/users/register', formData);
            console.log(res.data);
            if (onSuccessfulSignup) onSuccessfulSignup(); // Call the provided callback on successful signup
        } catch (err) {
            setErrors(err.response.data.errors || [{ msg: 'An error occurred' }]);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {errors.map((error, index) => (
                <div key={index} className="text-red-600">{error.msg}</div>
            ))}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={fullName} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" name="password2" id="password2" value={password2} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
