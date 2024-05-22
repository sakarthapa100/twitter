const express = require("express")

const  { deleteNotifications, getNotifications } = require("../controllers/notificationcontroller.js") 


const router = express.Router();

router.get("/",  getNotifications);
router.delete("/",  deleteNotifications);


module.exports= router