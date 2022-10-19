import { json } from 'body-parser'
import express from 'express'
import authentication from '../middleware/authentication'
import formatError from '../middleware/format.error'
import router from './router'

export const starterApp = () => {
  const app = express()

  app.use(json())

  app.use(router.publicRouter)

  app.use(authentication)

  app.use(router.privateRouter)

  app.use(formatError)

  return app
}
