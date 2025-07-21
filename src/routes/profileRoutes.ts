// src/routes/profileRoutes.ts
import { Router } from 'express'
import { getProfile } from '../controllers/profileController'
import { validateHandle } from '../middleware/validateHandle'

const router = Router()


//incrementa las visitas y retorna datos

router.get('/:handle', validateHandle, getProfile)

export default router
