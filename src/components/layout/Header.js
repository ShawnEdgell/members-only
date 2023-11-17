// components/layout/Header.js
const Header = ({ onOpenSignup, onOpenLogin, isLoggedIn, onLogout }) => {
    return (
        <header className="p-4 shadow-md text-gray-600">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Clubhouse</h1>
                <nav>
                    {isLoggedIn ? (
                        <button onClick={onLogout} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Logout</button>
                    ) : (
                        <>
                            <button onClick={onOpenSignup} className="bg-blue-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-700 transition duration-300">Sign Up</button>
                            <button onClick={onOpenLogin} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Login</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
