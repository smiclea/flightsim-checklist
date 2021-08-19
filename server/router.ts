import express, { Express } from 'express'
import path from 'path'

export default (app: Express): void => {
  const router = express.Router()

  router.get('/version', (_, res) => {
    res.send({ version: '1.0' })
  })

  app.use('/api', router)

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
  })
}
