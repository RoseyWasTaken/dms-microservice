import { Router } from 'express'
import IRoute from '../interfaces/routeIndex.interface'
import carRoute from './car.route'

const router: Router = Router()

const mainRoute: IRoute[] = [{
  path: '/cars',
  route: carRoute
}]

mainRoute.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
