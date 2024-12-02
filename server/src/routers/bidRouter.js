import express from 'express'
import * as controller from "../controllers/bidController.js";

const router = express.Router()

router.get('/', controller.getAllBids)
router.get('/:id')

export default router