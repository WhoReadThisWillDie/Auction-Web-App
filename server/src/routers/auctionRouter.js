import express from 'express'
import * as auctionController from '../controllers/auctionController.js'
import {isLoggedIn} from "../middleware/middleware.js";

const router = express.Router()

router.get("/", auctionController.getAllAuctions)
router.post("/", auctionController.createAuction)

router.get("/:id", auctionController.getAuctionById)
router.patch("/:id", auctionController.editAuction)
router.delete("/:id", auctionController.deleteAuction)

router.get('/:id/bids', isLoggedIn, auctionController.getAuctionBids)
router.post('/:id/bids', isLoggedIn, auctionController.createBidForAuction)

export default router