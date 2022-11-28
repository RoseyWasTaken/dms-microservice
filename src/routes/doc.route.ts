import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from '../swagger/swagger.def'

const router: Router = Router()

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

export default router
