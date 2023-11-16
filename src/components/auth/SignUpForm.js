import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        password2: ''
    });
    const router = useRouter();
    const { fullName, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.error('Passwords do not match');
            return; // Add better error handling
        }
        try {
            const res = await axios.post('/api/users/register', { fullName, email, password });
            console.log(res.data);
            router.push('/login'); // Redirect to login page on successful sign up
        } catch (err) {
            console.error(err.response.data); // Handle errors
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
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
