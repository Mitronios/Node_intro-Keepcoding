import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
});

//Hash password method
userSchema.statics.hashPassword = (clearPassword) => {
  return bcrypt.hash(clearPassword, 7);
};

//Method for the instances of User
//when using instance methods avoid use of arrow functions, it overrides the this added by mongoose
userSchema.methods.comparePassword = function (clearPassword) {
  //this --> user, added by mongoose
  return bcrypt.compare(clearPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
