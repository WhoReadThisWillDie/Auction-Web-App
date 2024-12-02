import express from 'express'
import * as controller from "../controllers/userController.js";

const router = express.Router()

router.get('/', controller.getAllUsers)

router.get('/:id')

router.get('/register')

router.get('/login')

router.get('/token')

router.get('/:id/bids')

export default router