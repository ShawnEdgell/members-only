import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">My Clubhouse</h1>
                <nav>
                    <Link href="/" legacyBehavior>
                        <a className="text-white px-4 hover:text-gray-200">Home</a>
                    </Link>
                    <Link href="/signup" legacyBehavior>
                        <a className="text-white px-4 hover:text-gray-200">Sign Up</a>
                    </Link>
                    <Link href="/login" legacyBehavior>
                        <a className="text-white px-4 hover:text-gray-200">Login</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
