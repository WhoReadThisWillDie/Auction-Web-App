import express from 'express'
import * as userController from "../controllers/userController.js";
import {isLoggedIn} from "../middleware/middleware.js";

const router = express.Router()

router.post('/', userController.createUser)

router.get('/:id', isLoggedIn, userController.getUserById)

router.get('/:id/bids', isLoggedIn, userController.getUserBids)

router.get('/:id/won', isLoggedIn, userController.getUserAuctions)

export default router