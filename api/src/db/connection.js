const  mongoose = require('mongoose')

const connection = async()=>{
    await mongoose.connect(process.env.MONGODB_CONNCTION_STRING)
}

module.exports= {connection}