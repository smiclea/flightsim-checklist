import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'

import router from './router'
import env from './env'

export default (): void => {
  const app = express()

  app.use(express.json())
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, '../dist')))

  router(app)

  app.listen(env.PORT, () => {
    console.log('Node Server listening', `http://localhost:${env.PORT}`)
  })
}
