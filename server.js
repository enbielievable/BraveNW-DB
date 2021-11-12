require('dotenv').config()

const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const mongoose = require('mongoose')



mongoose
    .connect(process.env.DB_CONN_STRING, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const app = express()
const apiPort = process.env.API_PORT

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/api", userRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
