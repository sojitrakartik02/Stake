const Mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const userRouter=require('./Routes/userRoute.js')
const cors=require('cors')
dotenv.config();
const app = express()


const port = process.env.PORT || 4100;
const mongo = process.env.MONGO

Mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("Connect") }).catch(() => { console.log("Error") })

app.use(express.json())
app.use(cors())
app.use('/api',userRouter)
app.listen(port, () => {
    console.log(`runnig on ${port}`)
})
