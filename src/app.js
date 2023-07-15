import express from 'express'
import { loggermid } from './utils.js'

const app = express()
app.use(loggermid)

app.get('/', (req, res) => {
    req.logger.info('Mensaje de info...')
    res.json({ message: 'Maraton de Winston Logger' })
})

app.get('/testinglog', (req, res) => res.json({ message: 'Logger test...' }))

app.listen(8080, () => console.log('Server Up'))