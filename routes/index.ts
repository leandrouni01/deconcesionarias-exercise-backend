import * as express from 'express'
import path = require('path')
import { VehicleRouter } from './VehicleRouter'

export class Router {
  public static initializeRoutes(app: express.Express) {
    app.use('/vehicles', new VehicleRouter().router)
  }
}