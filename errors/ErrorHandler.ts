import {
  DatabaseError as SequelizeError
} from 'sequelize'
import * as express from 'express'
import { BaseError } from './BaseError'
import { DatabaseError } from './DatabaseError'
import { InternalServerError } from './InternalServerError'

export const errorHandler: express.ErrorRequestHandler = (error:BaseError, req, res, next) => {
  
  if (error instanceof SequelizeError) {
    console.error(error.message)
    return res.status(500).json(new DatabaseError(error.message))
  }

  if(error.code){
    console.error(error.message)
    return res.status(error.code).json(error)
  }

  console.error(error.message)
  return res.status(500).json(new InternalServerError(error.message))
}
