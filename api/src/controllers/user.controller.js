const User = require('../models/user.model')
const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')


const register = asyncHandler(async(req,res)=>{
    const {userName,email,fullName,password} = req.body;

    if([userName,email,fullName,password].some((fields)=> fields?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({email});
    if(existedUser){
        throw new ApiError(400,"User already registered")
    }
    const user = await User.create({
        userName,email,fullName,password
    })

    const succesFullyRegistedUser = await User.findById(user._id).select("-password -refreshToken")
    if(!succesFullyRegistedUser){
        throw new ApiError(501,"something went wrong")
    }

    res.json({
        success:true,
        user:succesFullyRegistedUser
    })
})

const login = asyncHandler(async(req,res)=>{
    const {email,userName,password} = req.body;

    if((!email && !userName) || !password){
        throw new ApiError(400, "All fields are required");
    }
    const user = await User.findOne({$or:[{userName},{email}]});
    if(!user){
        throw new ApiError(500,"User not found");
    }
    const isPassworRight = await user.isPasswordCorrect(password);
    if(!isPassworRight){
        throw new ApiError(500,"Wrong password")
    }

    const refreshToken = await user.generateRefreshToken();

    return res.status(201).cookie("token",refreshToken).json({
        success:true,
        user,
    })
})


module.exports = {register,login}