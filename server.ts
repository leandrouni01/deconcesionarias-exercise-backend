require('express-async-errors')
require('dotenv').config()
import express from 'express'
import * as config from './config'
import * as http from 'http'
import { Models } from './models'
import { Router } from './routes/index'
import { errorHandler } from './errors/ErrorHandler'
import { InternalServerError } from './errors/InternalServerError'
import path = require('path');

export class Server {
  public static app: express.Express

  constructor() {}

  public static async initializeApp(): Promise<http.Server> {
    try {
      Server.app = express()
      Server.configureApp()
      Router.initializeRoutes(Server.app)

      Server.app.use(errorHandler)
      if (process.env.NODE_ENV === 'production') {
        const buildPath = path.join(__dirname, '..', 'front');
        Server.app.use(express.static(buildPath));
        Server.app.get('*', (req, res) => {
          return res.sendFile(path.resolve(buildPath, 'index.html'));
        })
      }

      try {
        await Server.initializeDatabase()
      } catch (error) {
        console.error('Failed to initialize database', error)
      }

      return Server.app.listen(Server.app.get('port'))
    } catch (error:any) {
      throw new InternalServerError(error.message)
    }
  }

  private static initializeDatabase() {
    const sequelizeConfig = config.default.databaseURL
    const models = new Models(sequelizeConfig)
    return models.initModels()
  }

  private static configureApp() {
    const nodeEnv = process.env.NODE_ENV
    console.log(nodeEnv)
    if(nodeEnv) {
      Server.app.set('env', nodeEnv)
    }
    Server.app.set('port', process.env.PORT || 3000)
    Server.app.use(express.urlencoded({ extended: true }))
    Server.app.use(express.json())
  }
}
