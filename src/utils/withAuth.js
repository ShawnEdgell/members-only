export const withAuth = (handler) => async (req, res) => {
    // Assuming you have some way of determining if the user is authenticated
    // This could be checking a JWT token, a session, etc.
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        // Not authenticated
        return res.status(401).json({ message: 'You must be logged in.' });
    }

    // User is authenticated, proceed to the handler
    return handler(req, res);
};
