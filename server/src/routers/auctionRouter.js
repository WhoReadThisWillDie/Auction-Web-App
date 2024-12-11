import express from 'express'
import * as auctionController from '../controllers/auctionController.js'
import {getAllBids, createBid, deleteBid} from '../controllers/bidController.js'

const router = express.Router()

router.get("/", auctionController.getAllAuctions)
router.post("/", auctionController.createAuction)

router.get("/:id", auctionController.getAuctionById)
router.put("/:id", auctionController.editAuction)
router.delete("/:id", auctionController.deleteAuction)

router.get('/:id/bids', getAllBids)
router.post('/:id/bids', createBid)
router.delete('/:id/bids', deleteBid)

export default router