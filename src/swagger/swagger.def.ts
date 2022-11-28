import { swCarRouter } from './car.route.sw'

const swaggerDoc = {
  openapi: '3.0.0',
  info: {
    title: 'DMS API',
    version: '1.0.0',
    description: 'The REST API test service'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ],
  paths: { ...swCarRouter }
}

export default swaggerDoc
