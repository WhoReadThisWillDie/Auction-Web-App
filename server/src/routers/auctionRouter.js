import express from 'express'
import * as auctionController from '../controllers/auctionController.js'

const router = express.Router()

router.get("/", auctionController.getAllAuctions)
router.post("/", auctionController.createAuction)

router.get("/:id", auctionController.getAuctionById)
router.patch("/:id", auctionController.editAuction)
router.delete("/:id", auctionController.deleteAuction)

router.get('/:id/bids', auctionController.getAuctionBids)
router.post('/:id/bids', auctionController.createBidForAuction)

export default router