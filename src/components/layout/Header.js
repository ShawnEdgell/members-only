import { useRouter } from 'next/router';

const Header = ({ onOpenSignup, onOpenLogin, isLoggedIn, onLogout, isProfilePage }) => {
    const router = useRouter();

    return (
        <header className="p-4 shadow-md text-gray-600">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-purple-600 cursor-pointer" onClick={() => router.push('/')}>Clubhouse</h1>
                <nav>
                    {isLoggedIn ? (
                        <>
                            {isProfilePage ? (
                                <button onClick={() => router.push('/')} className="bg-purple-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-purple-700 transition duration-300">Home</button>
                            ) : (
                                <button onClick={() => router.push('/profile')} className="bg-purple-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-purple-700 transition duration-300">Profile</button>
                            )}
                            <button onClick={onLogout} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={onOpenSignup} className="bg-purple-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-purple-700 transition duration-300">Sign Up</button>
                            <button onClick={onOpenLogin} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">Login</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
