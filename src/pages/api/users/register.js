// pages/api/users/register.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, email, password, password2 } = req.body;

        // Basic input validation
        if (!fullName || !email || !password || !password2) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (password !== password2) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        try {
            const backendRes = await axios.post('http://localhost:3001/api/users/register', req.body, {
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
