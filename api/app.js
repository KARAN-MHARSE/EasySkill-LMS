const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const {connection} = require('./src/db/connection')

// Middlewares
app.use(express.json())

// Get Routers
const userRoute = require('./src/routes/user.route')

//setUp routers
app.use('/api/v2/auth',userRoute)


const port = process.env.PORT || "6060"
const start = async()=>{
    await connection().then(app.listen(port,console.log(`The server is listening on port ${port}`)))
}
start()

