// pages/api/users/login.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Basic input validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        try {
            const backendRes = await axios.post('http://localhost:3001/api/users/login', req.body, {
                headers: req.headers,
                withCredentials: true,
            });

            // Forward the response
            res.status(200).json(backendRes.data);
        } catch (error) {
            res.status(error.response?.status || 500).json(error.response?.data || { message: 'An error occurred' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
