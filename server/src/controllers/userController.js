import users from '../data/users.js'
import bcrypt from 'bcrypt'
import bids from '../data/bids.js'
import {generateToken} from '../jwt/generateToken.js'

export function getUserById(req, res) {
    const userId = parseInt(req.params.id)
    const user = users.find(user => user.id === userId)

    if (!user) {
        return res.status(404).send({message: 'User not found'})
    }

    res.status(200).json(user)
}

export function createUser(req, res) {
    const newUser = {
        id: users.length + 1,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: req.body.isAdmin
    }

    if (!newUser.email || !newUser.password || !newUser.isAdmin === undefined) {
        return res.status(400).send({message: 'Missing required fields'})
    }

    users.push(newUser)
    res.status(201).send({message: 'User created successfully'})
}

export function loginUser(req, res) {
    const user = users.find(user => user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password))

    if (!user) {
        return res.status(401).send({message: 'Invalid credentials'})
    }

    const token = generateToken(user)
    res.status(200).json({token: token})
}

export function getUserBids(req, res) {
    const userId = parseInt(req.params.id)
    const user = users.find(user => user.id === userId)

    if (!user) {
        return res.status(404).send({message: 'User not found'})
    }

    const userBids = bids.filter(bid => bid.userId === userId)
    return res.status(200).json(userBids)
}

export function getUserAuctions(req, res) {

}