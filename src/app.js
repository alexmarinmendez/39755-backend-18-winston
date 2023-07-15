import express from 'express'

const app = express()

app.get('/', (req, res) => res.json({ message: 'Maraton de Winston Logger' }))

app.get('/testinglog', (req, res) => res.json({ message: 'Logger test...' }))

app.listen(8080, () => console.log('Server Up'))