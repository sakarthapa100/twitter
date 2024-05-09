require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/authroutes");
const connectdb = require("./db/connect");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);


connectdb().then(()=>{
  app.listen(PORT,(req,res)=> {
  console.log(`server is running at port ${PORT}`)
})

})

