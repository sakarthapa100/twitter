require('dotenv').config();

const User= require("../models/usermodel")
const jwt = require("jsonwebtoken")



module.exports.isAuthenticated = async(req,res,next)=>{
  try {
    const  token  = req.cookies.token
    console.log(token)
    if(!token ){
      return res.status(401).json({
        message:"User not authenticated ",
        success:false

      })
    }

    const decode = await jwt.verify(token, process.env.TOKEN_SECRET)
    console.log(decode)
    req.user= decode.userId
    next()
  } catch (error) {
    console.log(error)
  }
}