import React from 'react';
import LoginForm from '../components/auth/LoginForm';

export default function Home() {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Welcome to the Clubhouse!</h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">An exclusive platform to share and view posts.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            {/* Content goes here */}
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Latest Posts</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {/* Dynamic post content */}
                                </dd>
                            </div>
                            {/* More content */}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
