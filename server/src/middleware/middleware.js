import jwt from "jsonwebtoken"

function isLoggedIn(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Access token is missing'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Invalid token'})
        }

        req.userId = decoded.id
        req.isAdmin = decoded.isAdmin
        next()
    })
}

export function isAdmin(req, res, next) {
    isLoggedIn(req, res, () => {
        if (!req.isAdmin) {
            return res.status(403).json({message: 'You must be admin to access this route'})
        }
        next()
    })
}

export function isNotAdmin(req, res, next) {
    isLoggedIn(req, res, () => {
        if (req.isAdmin) {
            return res.status(403).json({message: 'You must be non-admin to access this route'})
        }
        next()
    })
}