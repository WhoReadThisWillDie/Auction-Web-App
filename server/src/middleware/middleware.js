import jwt from "jsonwebtoken";

export function isLoggedIn(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({message: 'Access token is missing'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Invalid token'});
        }

        req.userId = decoded.userId;
        next();
    });
}

export function isAdmin(req, res, next) {}

export function isNotAdmin(req, res, next) {}