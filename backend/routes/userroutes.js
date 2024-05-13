const express = require("express")
const router = express.Router()
const { login , logout, signup ,bookmark ,getMyProfile,getOtherUser,follow, unfollow } = require("../controllers/usercontroller")
const { isAuthenticated } = require("../middleware/authenticated")



router.route("/signup").post(signup)

router.route("/login").post(login)

router.route("/logout").get(logout)

router.route("/bookmark/:id")
.put(isAuthenticated,bookmark); 

router.route("/profile/:id")
.get(isAuthenticated,getMyProfile); 


router.route("/otheruser/:id")
.get(isAuthenticated,getOtherUser); 

router.route("/follow/:id")
.post(isAuthenticated,follow); 

router.route("/unfollow/:id")
.post(isAuthenticated,unfollow); 

module.exports = router