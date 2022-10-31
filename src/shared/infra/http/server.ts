import 'reflect-metadata'
import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'

import 'express-async-errors'
import { errors } from 'celebrate'
import connectMongoDB from '@shared/infra/mongodb'
import { router } from './routes'
import '@shared/container'
import { AppError } from '@shared/errors/AppError'

connectMongoDB()
const app = express()
app.use(express.json())
app.use(router)
app.use(errors())

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
        status_code: error.statusCode
      })
    }

    return response.status(500).json({
      message: `Internal server error - ${error.message}`,
      status_code: 500
    })
  }
)

app.listen(3333, () => {
  console.log('🚀 Servidor em execução')
})