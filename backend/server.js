require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8000;
const authRoutes = require("./routes/userroutes");
const tweetRoutes = require("./routes/tweetroute");
const connectdb = require("./db/connect");
const cookieParser= require("cookie-parser")





//help to get values in req.body

 // to parse req.body
app.use(express.urlencoded({ extended: true }))// to parse form data(urlencoded)
app.use(express.json())
app.use(cookieParser());
// Routes
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/tweet", tweetRoutes)
//data base connection
connectdb().then(()=>{
  app.listen(PORT,(req,res)=> {
  console.log(`server is running at port ${PORT}`)
})

})

