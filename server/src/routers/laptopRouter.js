import express from 'express'
import * as laptopController from "../controllers/laptopController.js"
import {isAdmin} from "../middleware/middleware.js";

const router = express.Router()

router.get('/', laptopController.getAllLaptops)
router.post('/', isAdmin, laptopController.createLaptop)

router.get('/:id', laptopController.getLaptopById)
router.patch('/:id', isAdmin, laptopController.editLaptop)
router.delete('/:id', isAdmin, laptopController.deleteLaptop)

export default router