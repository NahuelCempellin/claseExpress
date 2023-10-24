import express from 'express'
import { Prueba, Stock } from '../controllers/name.controller'

const router = express.Router()

router.put('/nombre', Prueba)
router.get('/stock', Stock)

export default router