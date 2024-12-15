import express from 'express'
import {getWonAuctions} from "../controllers/auctionController.js"
import {isNotAdmin} from "../middleware/middleware.js";

const router = express.Router()

router.get('/', isNotAdmin, getWonAuctions)

export default router