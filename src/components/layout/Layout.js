// Layout.js
import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import SignUpForm from '../auth/SignUpForm'; // Adjust the path as necessary
import LoginForm from '../auth/LoginForm';   // Adjust the path as necessary

const Layout = ({ children }) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSuccessfulSignup = () => {
        setShowSignUpModal(false);
        setShowLoginForm(true);
    };

    const handleSuccessfulLogin = () => {
        setShowLoginForm(false);
        setIsLoggedIn(true);
    };

    const handleLogout = async () => {
        try {
            await axios.post('/api/users/logout');
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <>
            <Header 
                onOpenSignup={() => setShowSignUpModal(true)} 
                onOpenLogin={() => setShowLoginForm(true)}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
            />
            <main className="flex-grow">{children}</main>
            <Footer />

            <Modal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
                <SignUpForm onSuccessfulSignup={handleSuccessfulSignup} />
            </Modal>
            <Modal isOpen={showLoginForm} onClose={() => setShowLoginForm(false)}>
                <LoginForm onSuccessfulLogin={handleSuccessfulLogin} />
            </Modal>
        </>
    );
};

export default Layout;
