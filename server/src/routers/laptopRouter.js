import express from 'express'
import * as controller from "../controllers/laptopControler.js";

const router = express.Router()

router.get('/', controller.getAllLaptops)

router.get('/:id')
router.post('/:id')
router.put('/:id')
router.delete('/:id')

router.get('/:id/bids')
router.post('/:id/bids')
router.delete('/:id/bids')

export default router