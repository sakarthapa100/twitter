const Tweet = require("../models/tweetmodel.js");
const User = require("../models/usermodel.js");


module.exports.createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(404).json({ message: "Fields are required", success: false });
    }

    const user = await User.findById(id).select("-password");
    const newTweet = await Tweet.create({ description, userId: id, userDetails: user });

    

    return res.status(201).json({ message: "Tweet created successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};
module.exports.deleteTweet = async(req, res ) => {
  try {
    const { id} = req.params
    await Tweet.findByIdAndDelete(id)
    return res.status(200).json({
      message:"Tweet was deleted succesfully",
      success:true
    })


  } catch (error) {
    console.log(error)
  }
}
module.exports.likeorunlike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id; // Access the tweetId from req.params
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false
      });
    }

    if (tweet.like.includes(loggedInUserId)) {
      // Dislike
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
      return res.status(200).json({
        message: "User disliked your post",
        success: true
      });
    } else {
      // Like
      await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
      return res.status(200).json({
        message: "User liked your post",
        success: true
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};


// module.exports.bookmark = async (req, res) => {
//   try {
//     const loggedInUserId = req.body.id;
//     const tweetId = req.params.id; // Access the tweetId from req.params
//     const user = await User.findById(loggedInUserId);


//     if (user.bookmarks.includes(tweetId)) {
//       // Dislike
//       await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
//       return res.status(200).json({
//         message: "Removed from bookmark ",
//         success: true
//       });
//     } else {
//       // Like
//       await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
//       return res.status(200).json({
//         message: "Bookmark added ",
//         success: true
//       });
//     }
    
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error",
//       success: false
//     });
//   }
// };

module.exports.getAllTweets= async(req,res)=>{
  try {
    const id = req.params.id
    const loggedInUser= await User.findById(id)
    const loggedInUserTweets = await Tweet.find({userId:id})
    const followingUserTweets = await Promise.all(loggedInUser.following.map((otherUserId)=>{
      return Tweet.find({userId:otherUserId})
    }))
    return res.status(200).json({
      tweets:loggedInUserTweets.concat(...followingUserTweets)
    })
  } catch (error) {
    console.log(error)
  }
}


module.exports.getFollowTweets= async(req,res)=>{
  try {
    const id = req.params.id
    const loggedInUser= await User.findById(id)

    const followingUserTweets = await Promise.all(loggedInUser.following.map((otherUserId)=>{
      return Tweet.find({userId:otherUserId})
    }))
    return res.status(200).json({
      tweets:[].concat(...followingUserTweets)
    })
    


  } catch (error) {
    console.log(error)
  }
}

