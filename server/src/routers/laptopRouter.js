import express from 'express'
import * as laptopController from "../controllers/laptopController.js";

const router = express.Router()

router.get('/', laptopController.getAllLaptops)
router.post('/', laptopController.createLaptop)

router.get('/:id', laptopController.getLaptopById)
router.patch('/:id', laptopController.editLaptop)
router.delete('/:id', laptopController.deleteLaptop)

router.get('/:id/auctions', laptopController.getLaptopAuctions)

export default router