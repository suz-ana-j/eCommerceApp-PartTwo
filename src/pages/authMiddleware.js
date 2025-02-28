const authMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        // User is logged in, proceed with the request
        return next();
    }
    // User is not logged in, return 401 Unauthorized
    return res.status(401).json({ message: 'Unauthorized access' });
};

module.exports = authMiddleware;
