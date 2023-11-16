import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Adjust this URL to match your Express server's address and route
            const backendRes = await axios.post('http://localhost:3001/api/users/login', req.body);
            res.status(200).json(backendRes.data);
        } catch (error) {
            // Forward the error response from the Express server
            res.status(error.response?.status || 500).json(error.response?.data || { message: 'An error occurred' });
        }
    } else {
        // Only POST method is allowed
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
