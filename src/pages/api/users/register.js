import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const backendRes = await axios.post('http://localhost:3001/api/users/register', req.body);
            res.status(200).json(backendRes.data);
        } catch (error) {
            console.error('Backend Error:', error); // Log the complete error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
                res.status(error.response.status).json(error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error(error.request);
                res.status(500).json({ message: 'No response received from backend' });
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
                res.status(500).json({ message: error.message });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
