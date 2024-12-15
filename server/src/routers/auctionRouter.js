import express from 'express'
import * as auctionController from '../controllers/auctionController.js'
import {isAdmin, isNotAdmin} from "../middleware/middleware.js"

const router = express.Router()

router.get("/", auctionController.getAllAuctions)
router.post("/", isAdmin, auctionController.createAuction)

router.get("/:id", auctionController.getAuctionById)
router.patch("/:id", isAdmin, auctionController.editAuction)
router.delete("/:id", isAdmin, auctionController.deleteAuction)

router.get('/:id/bids', auctionController.getAuctionBids)
router.post('/:id/bids', isNotAdmin, auctionController.createBidForAuction)

export default router