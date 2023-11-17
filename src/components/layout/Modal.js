// components/Modal.js
import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        } else {
            const timeout = setTimeout(() => {
                setIsRendered(false);
            }, 300); // Duration of fade-out animation
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return isRendered ? (
        <div 
            className={`fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75 transition-opacity ${isOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}
            onClick={handleBackgroundClick}
        >
            <div 
                className={`bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full ${isOpen ? 'animate-modalIn' : 'animate-modalOut'}`}
                onClick={(e) => e.stopPropagation()} // Prevent click events from closing the modal when clicking inside
            >
                <button 
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;
