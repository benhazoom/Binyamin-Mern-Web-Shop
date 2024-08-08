import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}
//this pre allowes us to do something before a User is saved to the DB - we also can have post for after 
userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next();
  }
  //if we are modifing the password we need to encrypt it
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
})
const User = mongoose.model('User', userSchema);

export default User;