const apiDoc = {
  swagger: '2.0',
  host: 'localhost:3000',
  basePath: '/',
  info: {
    title: 'Place holder title',
    version: '1.3.3.7'
  },
  definitions: {
    World: {
      type: 'object',
      properties: {
        name: {
          description: 'The name of this world',
          type: 'string'
        }
      },
      required: ['name']
    }
  },
  paths: {}
}

export default apiDoc
