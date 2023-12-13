require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const catRoutes = require('./routes/cats')

const app = express()
const port = process.env.PORT
const URI = process.env.MONGO_URI

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/cats',catRoutes)

app.get("/", (req, res)  => {
    res.json({
        name: "Cat API",
        description: "See all the cats"
    })
})

mongoose.connect(URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to DB & Listening on port ${port}!`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


