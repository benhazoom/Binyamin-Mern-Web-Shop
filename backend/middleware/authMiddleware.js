import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//Protected Routes
//this method will help us add the user to the req object in api calls
const protect = asyncHandler(async (req, res, next) => {
  let token;

  //Read JWT from the cookie
  token = req.cookies.jwt; ///jwt as called in the userController

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); //decoded will be an object that has userId property as defined in userController token definition
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Autorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Autorized, no token");
  }
});

//Admin middlewere
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(401);
        throw new Error('Not Autorized as admin')
    }
};

export {admin,protect};
