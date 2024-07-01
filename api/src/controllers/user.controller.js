const User = require('../models/user.model')
const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')


const signIn = asyncHandler(async(req,res)=>{
    res.json({
        message:"Done"
    })
})


module.exports = {signIn}