import { verifyToken } from './middlewares/verifyToken.js'
import { signToken } from './middlewares/signToken.js'
// import { api } from './services/api.js'

import { config } from './config.js'

import express from 'express'
import jsonServer from 'json-server'
import cors from 'cors'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares) // Set default middlewares (logger, static, cors)

server.use(router) // Use default router

const app = express()

app.use(express.json()) // <==== parse request body as JSON
app.use(cors())

//api requests starts
app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
})

app.post('/api/auth', signToken, (req, res) => {
    // console.log(req.body);
    res.json(req.data)
})

//server listeners starts
app.listen(config.CLIENT_PORT, () => {
    console.log(`App is running on http://localhost:${config.CLIENT_PORT}`);
})

server.listen(config.SERVER_PORT, () => {
    console.log(`JSON Server is running on port ${config.SERVER_PORT}`);
})
