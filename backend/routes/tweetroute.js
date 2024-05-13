const express = require("express")
const router = express.Router()
const { createTweet,deleteTweet, likeorunlike ,bookmark,getAllTweets,getFollowTweets } = require("../controllers/tweetcontroller")
const { isAuthenticated } = require("../middleware/authenticated")



router.route("/create").post(isAuthenticated, createTweet)

router.route("/delete/:id").delete(deleteTweet)
router.route("/like/:id")
  .put(isAuthenticated,likeorunlike); 

  
  router.route("/bookmark/:id")
  .put(isAuthenticated,bookmark); 

  router.route("/alltweets/:id")
  .get(isAuthenticated,getAllTweets); 
  
  router.route("/followingtweet/:id")
  .get(isAuthenticated,getFollowTweets); 
  

module.exports = router