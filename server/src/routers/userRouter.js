import express from 'express'
import * as userController from "../controllers/userController.js"
import {isLoggedIn, isNotAdmin} from "../middleware/middleware.js"

const router = express.Router()

router.post('/', userController.createUser)

router.get('/me', isLoggedIn, userController.getUserInfo)

router.get('/:id/won', isNotAdmin, userController.getUserAuctions)

export default router