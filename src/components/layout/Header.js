import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">My Clubhouse</h1>
                <nav>
                    <a href="#" className="text-white px-4 hover:text-gray-200">Home</a>
                    <a href="#" className="text-white px-4 hover:text-gray-200">About</a>
                    <a href="#" className="text-white px-4 hover:text-gray-200">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
