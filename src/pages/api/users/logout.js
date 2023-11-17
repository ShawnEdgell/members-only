export default function handler(req, res) {
    if (req.method === 'POST') {
        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    console.error('Logout Error:', err);
                    return res.status(500).json({ message: 'Logout failed. Please try again.' });
                }
                res.clearCookie('connect.sid'); // Replace 'connect.sid' with your session cookie name if different
                return res.status(200).json({ message: 'Logged out successfully' });
            });
        } else {
            return res.status(200).json({ message: 'No active session to log out from' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
