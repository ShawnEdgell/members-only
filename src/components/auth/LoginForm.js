import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/login', formData);
            console.log(res.data);
            router.push('/'); // Redirect to home page or dashboard on successful login
        } catch (err) {
            console.error(err.response.data); // Handle errors
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
