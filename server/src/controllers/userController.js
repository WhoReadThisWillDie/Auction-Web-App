import users from '../data/users.js'
import bcrypt from 'bcrypt'
import {generateToken} from '../jwt/generateToken.js'

export function createUser(req, res) {
    const newUser = {
        id: users.length + 1,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: req.body.isAdmin
    }

    if (req.body.id) {
        return res.status(400).send({message: 'UserId should not be specified manually'})
    }
    if (!newUser.username || !newUser.password || !newUser.isAdmin === undefined) {
        return res.status(400).send({message: 'Missing required fields'})
    }
    if (users.find(user => user.username === newUser.username) || newUser.username.length < 3 || newUser.username.length > 20) {
        return res.status(400).send({message: 'Invalid username'})
    }
    if (req.body.password.length < 5 || req.body.password.length > 20) {
        return res.status(400).send({message: 'Invalid password'})
    }

    users.push(newUser)
    res.status(201).json({
        message: 'User created successfully',
        token: generateToken(newUser)
    })
}

export function loginUser(req, res) {
    const user = users.find(user => user.username === req.body.username && bcrypt.compareSync(req.body.password, user.password))

    if (!user) {
        return res.status(401).send({message: 'Invalid credentials'})
    }

    const token = generateToken(user)
    res.status(200).send({token: token})
}