import React from 'react';

const SignUpForm = () => {
    return (
        <form className="space-y-6">
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="fullName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
