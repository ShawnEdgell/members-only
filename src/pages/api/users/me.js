import { withAuth } from '../../utils/withAuth'; // Ensure you have this utility for authentication check

const handler = async (req, res) => {
    if (req.method === 'GET') {
        if (!req.user) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        // Assuming req.user is populated from your authentication strategy
        res.status(200).json(req.user);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default withAuth(handler);
