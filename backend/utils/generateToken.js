import jwt from "jsonwebtoken";

const expiresInLengthInDays=1 ;

const generateToken = (res, userID) => {
  const token = jwt.sign({userID}, process.env.JWT_SECRET, {
    expiresIn: `${expiresInLengthInDays}d`,
  });
  //now we set the jwt as a HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.Node_ENV !== "development",
    sameSite: "strict",
    maxAge: expiresInLengthInDays * 24 * 60 * 60 * 1000, //maxAge is in milliseconds and we want 1 days
  });
};

export default generateToken;
