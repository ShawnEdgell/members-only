import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/users/me', { withCredentials: true }) // Include credentials in the request
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>No user data found.</p>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            {/* Add more fields as necessary */}
        </div>
    );
}
