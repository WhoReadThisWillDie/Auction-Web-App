import express from 'express'
import * as controller from "../controllers/userController.js";

const router = express.Router()

router.get('/:id')

router.get('/register')

router.get('/login')

router.get('/token')

router.get('/:id/bids')

router.get('/:id/won')

export default router