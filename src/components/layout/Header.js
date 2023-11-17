const Header = ({ onOpenSignup, onOpenLogin, isLoggedIn, onLogout }) => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">My Clubhouse</h1>
                <nav>
                    {isLoggedIn ? (
                        <button onClick={onLogout} className="text-white px-4 hover:text-gray-200">Logout</button>
                    ) : (
                        <>
                            <button onClick={onOpenSignup} className="text-white px-4 hover:text-gray-200">Sign Up</button>
                            <button onClick={onOpenLogin} className="text-white px-4 hover:text-gray-200">Login</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
