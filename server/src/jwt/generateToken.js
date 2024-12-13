import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin
    }

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    })
}