import express from 'express'
import * as controller from '../controllers/auctionController.js'
import * as bidController from "../controllers/bidController.js";

const router = express.Router()

router.get("/", controller.getAllAuctions)
router.post("/", controller.createAuction)

router.get("/:id", controller.getAuctionById)
router.put("/:id", controller.editAuction)
router.delete("/:id", controller.deleteAuction)

router.get('/:id/bids', bidController.getAllBids)
router.post('/:id/bids', bidController.createBid)
router.delete('/:id/bids', bidController.deleteBid)

export default router