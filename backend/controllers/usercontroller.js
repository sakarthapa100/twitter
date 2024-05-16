require('dotenv').config();
const User = require("../models/usermodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


module.exports.signup= async(req,res)=> {
	try {
		const { fullname, username, email, password } = req.body;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
				return res.status(400).json({ 
						message: "Invalid email format",
						success: false
				});
		}
		
		if (!fullname || !username || !email || !password) 
			{
			return res.status(401).json({
				message:"All fields are required",
				success:false
			})
		}
		const user = await User.findOne({email})
		console.log(user)
		if(user){
			return res.status(401).json({
				message:"user already exit",
				success: false
			})
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({
						fullname,
						username,
						email,
						password: hashedPassword,
					});
					return res.status(201).json({
						message:"Account created sucessfully",
						success:true
					})
	} catch (error) {
		console.log(error)
	}
}
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Added email extraction
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false
      });
    }
    const user = await User.findOne({ email }); 
		console.log(user)// Corrected to use extracted email
    if (!user) {
      return res.status(401).json({
        message: "User does not exist with this email",
        success: false
      });
    }
    console.log("TOKEN_SECRET:", process.env.TOKEN_SECRET);


    const isMatched = await bcrypt.compare(password, user.password); // Corrected order of arguments
    if (!isMatched) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false
      });
    }
    const tokenData = {
      userid: user._id
    };
		// const TOKEN_SECRET = process.env.TOKEN_SECRET || "the_secret_token";
		

    const token = await jwt.sign(
      { tokenData },
      process.env.TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return res.status(201).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }).json({
      message: `Welcome back ${user.username}`,
			user,
      success: true
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred",
      success: false
    });
  }
};

module.exports.logout = (req,res)=>{
	return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
		message:"user logout sucessfully",
		success:true
	})
}


module.exports.bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id; // Access the tweetId from req.params
    const user = await User.findById(loggedInUserId);


    if (user.bookmarks.includes(tweetId)) {
      // Dislike
      await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
      return res.status(200).json({
        message: "Removed from bookmark ",
        success: true
      });
    } else {
      // Like
      await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
      return res.status(200).json({
        message: "Bookmark added ",
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


module.exports.getMyProfile =async (req,res)=> {
try {
	const id = req.params.id
const user=await User.findById(id).select("-password")
return res.status(200).json({
	user,
})

} catch (error) {
	console.log(error)
}
}

module.exports.getOtherUser= async(req,res)=>{
	try {
		const {id } = req.params
		const otherUsers = await User.find({_id:{$ne:id}}).select("-password")
if(!otherUsers){
	return res.status(404).json({
		message:"Currently do not have any user "
	})
}
return res.status(200).json({

otherUsers,
})
	} catch (error) {
		
		console.log(error)
	}
}
module.exports.follow = async (req, res) => {
	try {
			const loggedInUserId = req.body.id;
			const userId = req.params.id;
			
			// Assuming you have imported the User model
			const loggedInUser = await User.findById(loggedInUserId);
			const user = await User.findById(userId);
			
			// Check if loggedInUserId already exists in user's followers array
			if (!user.followers.includes(loggedInUserId)) {
					await user.updateOne({ $push: { followers: loggedInUserId } });
					await loggedInUser.updateOne({ $push: { following: userId } });
			} else {
					return res.status(400).json({
							message: `User already followed ${user.username}`
					});
			}

			return res.status(200).json({
					message: `${loggedInUser.username} just followed ${user.username}`,
					success: true
			});
	} catch (error) {
			console.log(error);
			return res.status(500).json({
					message: "Internal server error"
			});
	}
};

module.exports.unfollow = async(req, res) => {
	try {
		const loggedInUserId = req.body.id;
		const userId = req.params.id;
		
		// Assuming you have imported the User model
		const loggedInUser = await User.findById(loggedInUserId);
		const user = await User.findById(userId);
		
		// Check if loggedInUserId already exists in user's followers array
		if (loggedInUser.following.includes(loggedInUserId)) {
				await user.updateOne({ $pull: { followers: loggedInUserId } });
				await loggedInUser.updateOne({ $pull: { following: userId } });
		} else {
				return res.status(400).json({
						message: `User hasn't followed you yet `
				});
		}

		return res.status(200).json({
				message: `${loggedInUser.username} unfollow to  ${user.username}`,
				success: true
		});


	} catch (error) {
		console.log(error)
	}
}