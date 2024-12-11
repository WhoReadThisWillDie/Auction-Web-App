import express from 'express'
import * as laptopController from "../controllers/laptopController.js";
/* import {getAllAuctionsByLaptop} from "../controllers/auctionController.js"; */

const router = express.Router()

router.get('/', laptopController.getAllLaptops)
router.post('/', laptopController.createLaptop)

router.get('/:id', laptopController.getLaptopById)
router.put('/:id', laptopController.editLaptop)
router.delete('/:id', laptopController.deleteLaptop)

/* router.get('/:id/auctions', getAllAuctionsByLaptop) */

export default router