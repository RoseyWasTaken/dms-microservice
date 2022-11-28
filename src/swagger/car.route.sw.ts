import { swaggerChangeColorObject, swaggerCreateCarBodyObject, swaggerGetCarByIdObject, swaggerGetCarsObject, swaggerRemoveCarObject } from '../validators/car.joi'

export const swCarRouter = {
  '/cars/createCar': {
    post: {
      summary: 'Persist car document to database',
      tags: ['car', 'create'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...swaggerCreateCarBodyObject
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Returns created car object.'
        },
        409: {
          description: 'Error - Car with such vin already exists.'
        }
      }
    }
  },
  '/cars/getCarById': {
    post: {
      summary: 'Returns object with provided ID.',
      tags: ['car', 'find'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...swaggerGetCarByIdObject
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Returns created car object.'
        },
        404: {
          description: 'Error - Car with such ID does not exist.'
        }
      }
    }
  },
  '/cars/getCars': {
    post: {
      summary: 'Returns all cars that match provided filter.',
      tags: ['car', 'find'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...swaggerGetCarsObject
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Returns matching car objects.'
        }
      }
    }
  },
  '/cars/changeColor': {
    post: {
      summary: 'Updates color property of a car that matches provided filter.',
      tags: ['car', 'update'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...swaggerChangeColorObject
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Returns updated car object.'
        },
        500: {
          description: 'Error - Uknown exception.' // don't remember why a 500 is here
        }
      }
    }
  },
  '/cars/removeCar': {
    post: {
      summary: 'Removes car document which matches provided fitler',
      tags: ['car', 'remove'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...swaggerRemoveCarObject
            }
          }
        }
      },
      responses: {
        200: {
          description: 'If the car has been succesfully deleted returns 200 only.'
        },
        404: {
          description: 'Error - No car matches the filter'
        }
      }
    }
  }
}
