import users from '../data/users.js'

export function getAllUsers(req, res) {
    res.send(users)
}