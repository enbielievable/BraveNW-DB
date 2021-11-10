const dotenv = require('dotenv')

const result = dotenv.config()

if (result.error) {
    throw result.error
  }
  
  console.log(result)

const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const mongoose = require('mongoose')

const userModel = require('./models/userModel')

const uemail = "evieswelch@gmail.com"

mongoose
    .connect(process.env.DB_CONN_STRING, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const app = express()
const apiPort = 42069

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/api", userRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

// const t = async () => {
//     const d = await userModel.findOne({email: uemail})
//     console.log(d)
// }
// t()