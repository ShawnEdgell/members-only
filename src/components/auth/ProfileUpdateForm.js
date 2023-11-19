// components/auth/ProfileUpdateForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ProfileUpdateForm = ({ user }) => {
    const [formData, setFormData] = useState({
        fullName: user.fullName,
        email: user.email
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors([]); // Clear errors when user starts typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/update', formData, {
                withCredentials: true
            });
            console.log(res.data);
            // Update frontend state or context as needed
        } catch (error) {
            console.error(error);
            setErrors(error.response.data.errors || [{ msg: 'An error occurred' }]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {errors.map((error, index) => (
                <div key={index} className="text-red-600">{error.msg}</div>
            ))}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Update Profile
            </button>
        </form>
    );
};

export default ProfileUpdateForm;
