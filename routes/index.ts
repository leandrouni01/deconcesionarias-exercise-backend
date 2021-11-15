import * as express from 'express'
import path = require('path')
import { PropertyCategoryRouter } from './PropertyCategoryRouter'
import { PropertyValueRouter } from './PropertyValueRouter'
import { VehiclePropertyRouter } from './VehiclePropertyRouter'
import { VehicleRouter } from './VehicleRouter'

export class Router {
  public static initializeRoutes(app: express.Express) {
    app.use('/api/vehicles', new VehicleRouter().router)
    app.use('/api/ratings', new PropertyValueRouter().router)
    app.use('/api/properties', new VehiclePropertyRouter().router)
    app.use('/api/categories', new PropertyCategoryRouter().router)
  }
}