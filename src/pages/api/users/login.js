import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const backendRes = await axios.post('http://localhost:3001/api/users/login', req.body, {
                // Forward the headers received from the frontend to the backend
                headers: req.headers,
                // Allow credentials to include cookies
                withCredentials: true,
            });

            // Forward the headers received from the backend to the frontend
            for (const [key, value] of Object.entries(backendRes.headers)) {
                res.setHeader(key, value);
            }

            res.status(200).json(backendRes.data);
        } catch (error) {
            res.status(error.response?.status || 500).json(error.response?.data || { message: 'An error occurred' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
